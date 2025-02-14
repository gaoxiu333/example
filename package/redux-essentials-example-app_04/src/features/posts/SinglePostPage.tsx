import { useAppSelector } from '@/app/hooks'
import { Link, useParams } from 'react-router-dom'
import { selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectCurrentUsername } from '../auth/authslice'

export const SinglePostPage = () => {
  const { postId } = useParams()
  const currentUsername = useAppSelector(selectCurrentUsername)
  const post = useAppSelector((state) => selectPostById(state, postId!))
  if (!post)
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  const canEdit = currentUsername === post.user
  return (
    <>
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p>
            <PostAuthor userId={post.user} />
            <TimeAgo timestamp={post.date!} />
          </p>
          <ReactionButtons post={post} />

          <p className="post-content">{post.content}</p>
          {canEdit && (
            <Link to={`/editPost/${post.id}`} className="button">
              Edit Post
            </Link>
          )}
        </article>
      </section>
    </>
  )
}
