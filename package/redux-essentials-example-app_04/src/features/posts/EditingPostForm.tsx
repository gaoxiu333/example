import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { useNavigate, useParams } from 'react-router-dom'
import { postUpdated, selectPostById } from './postsSlice'
import { useEditPostMutation, useGetPostQuery } from '@/api/apislice'

export const EditPostForm = () => {
  const { postId } = useParams()
  // const post = useAppSelector((state) => selectPostById(state, postId!))
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { data: post } = useGetPostQuery(postId!)
  const [updatePost, { isLoading }] = useEditPostMutation()
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }
  const onSavePostClicked = async (e: React.FormEvent) => {
    e.preventDefault()
    const { elements } = e.currentTarget as HTMLFormElement & { elements: { [key: string]: { value: string } } }
    const title = elements.postTitle.value
    const content = elements.postContent.value
    if (title && content) {
      // dispatch(postUpdated({ title, content, id: post.id }))
      await updatePost({ id: post.id, title, content })
      navigate(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form onSubmit={onSavePostClicked}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" name="postTitle" defaultValue={post.title} />
        <label htmlFor="postContent">Content:</label>
        <input type="textarea" id="postContent" name="postContent" defaultValue={post.content} />
        <button>Post Save</button>
      </form>
    </section>
  )
}
