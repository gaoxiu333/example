import { Post, NewPost, PostUpdate } from '@/features/posts/postsSlice'
import { User } from '@/features/users/usersSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'fakeApi' }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => '/posts',
      providesTags: (result = [], error, arg) => ['Post', ...result.map(({ id }) => ({ type: 'Post', id }) as const)],
    }),
    getPost: builder.query<Post, string>({
      query: (postId) => `/posts/${postId}`,
      providesTags: (result, error, arg) => [{ type: 'Post', id: arg }],
    }),
    addNewPost: builder.mutation<Post, NewPost>({
      query: (initialPost) => ({
        url: '/posts',
        method: 'POST',
        body: initialPost,
      }),
      invalidatesTags: ['Post'],
    }),
    editPost: builder.mutation<Post, PostUpdate>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PATCH',
        body: post,
      }),
    }),
  }),
})

export const { useGetPostsQuery, useGetPostQuery, useAddNewPostMutation, useEditPostMutation } = apiSlice
