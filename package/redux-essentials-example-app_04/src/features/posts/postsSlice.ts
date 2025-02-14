import { RootState } from '@/app/store'
import { createEntityAdapter, createSelector, createSlice, EntityState, nanoid, PayloadAction } from '@reduxjs/toolkit'
import { sub } from 'date-fns'
import { logout, userLoggedOut } from '../auth/authslice'
import { createAppAsyncThunk } from '@/app/withTypes'
import { client } from '@/api/client'
import { AppStartListening } from '@/app/listenerMiddleware'

export interface Reactions {
  thumbsUp: number
  tada: number
  heart: number
  rocket: number
  eyes: number
}

export type ReactionName = keyof Reactions

export interface Post {
  id: string
  title: string
  content: string
  user: string
  date: string
  reactions: Reactions
}

type PostUpdate = Pick<Post, 'id' | 'title' | 'content'>
type NewPost = Pick<Post, 'title' | 'content' | 'user'>

// 添加post的请求状态
interface PostsState extends EntityState<Post, string> {
  // posts: Post[]
  status: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
}

const postsAdapter = createEntityAdapter<Post>({
  sortComparer: (a, b) => b.date.localeCompare(a.date),
})

// const initialState: PostsState = {
//   posts: [],
//   status: 'idle',
//   error: null,
// }

const initialState: PostsState = postsAdapter.getInitialState({
  status: 'idle',
  error: null,
})

// 初始化状态，默认值
const initialReactions: Reactions = {
  thumbsUp: 0,
  tada: 0,
  heart: 0,
  rocket: 0,
  eyes: 0,
}

// 监听器
export const addPostsListeners = (startAppListening: AppStartListening) => {
  startAppListening({
    actionCreator: addNewPost.fulfilled,
    effect: async (action, listenerApi) => {
      const { toast } = await import('react-tiny-toast')
      const toastId = toast.show('New post added!', {
        variant: 'success',
        position: 'bottom-right',
        pause: true,
      })
      await listenerApi.delay(5000)
      toast.remove(toastId)
    },
  })
}

// 使用 chunk 进行请求
export const fetchPosts = createAppAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await client.get<Post[]>('/fakeApi/posts')
    return response.data
  },
  {
    condition(arg, thunkApi) {
      // 避免 strict mode 下的重复调用
      const postsStatus = selectPostsStatus(thunkApi.getState())
      if (postsStatus !== 'idle') {
        return false
      }
    },
  },
)

export const addNewPost = createAppAsyncThunk(
  'posts/addNewPost',

  async (initialPost: NewPost) => {
    const response = await client.post<Post>('/fakeApi/posts', initialPost)
    return response.data
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // postAdded(state, action: PayloadAction<Post>) {
    //   state.push(action.payload)
    // },
    postAdded: {
      reducer(state, action: PayloadAction<Post>) {
        // state.posts.push(action.payload)
      },
      prepare(title: string, content: string, userId: string) {
        // prepare 方法返回的对象会作为 action.payload，相当于多了一个步骤，先准备数据，再传给 reducer
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user: userId,
            date: new Date().toISOString(),
            reactions: initialReactions,
          },
        }
      },
    },
    postUpdated(state, action: PayloadAction<PostUpdate>) {
      const { id, title, content } = action.payload
      // const existingPost = state.posts.find((post) => post.id === id)
      // const existingPost = state.entities[id]
      // if (existingPost) {
      //   existingPost.title = title
      //   existingPost.content = content
      // }
      postsAdapter.updateOne(state, { id, changes: { title, content } })
    },
    reactionAdded(state, action: PayloadAction<{ postId: string; reaction: ReactionName }>) {
      const { postId, reaction } = action.payload
      // const existingPost = state.posts.find((post) => post.id === postId)
      const existingPost = state.entities[postId]
      if (existingPost) {
        existingPost.reactions[reaction]++
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logout.fulfilled, (state) => {
        return initialState
      })
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // state.posts.push(...action.payload)
        postsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message ?? 'Unknown Error'
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        // state.posts.push(action.payload)
        postsAdapter.addOne(state, action)
      })
  },
  // selectors: {
  //   selectAllPosts: (postsState) => postsState,
  //   selectPostById: (postState, postId: string) => postState.posts.find((post) => post.id === postId),
  // },
})

export const { postUpdated, reactionAdded } = postsSlice.actions

// 解释：这里的 postAdded 就是一个 reducer 等价如下：
// function sliceReducer(state=initialState,action){
//     switch(action.type){
//         case 'posts/postAdded':
//             return [...state,action.payload]
//         default:
//             return state
//     }
// }

export default postsSlice.reducer

// export const selectAllPosts = (state: RootState) => state.posts.posts
// export const selectPostById = (state: RootState, postId: string) => state.posts.posts.find((post) => post.id === postId)
export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts)
export const selectPostsByUser = createSelector(
  [selectAllPosts, (state: RootState, userId: string) => userId],
  (posts, userId) => posts.filter((post) => post.user === userId),
)
// export const selectPostsByUser = (state: RootState, userId: string) => {
//   const allPosts = selectAllPosts(state)
//   // TODO 不合适？
//   return allPosts.filter((post) => post.user === userId)
// }
// 进阶用法：
// export const { selectAllPosts, selectPostById } = postsSlice.selectors

export const selectPostsStatus = (state: RootState) => state.posts.status
export const selectPostError = (state: RootState) => state.posts.error
