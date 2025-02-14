import { useAppSelector } from '@/app/hooks'
import { Link, useParams } from 'react-router-dom'
import { selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { TimeAgo } from './TimeAgo'
import { ReactionButtons } from './ReactionButtons'
import { selectCurrentUsername } from '../auth/authslice'
import { useGetPostQuery } from '@/api/apislice'
import { Spinner } from '@/components/Spinner'
import { useEffect } from 'react'

export const SinglePostPage = () => {
  const { postId } = useParams()
  const currentUsername = useAppSelector(selectCurrentUsername)
  const { data: post, isFetching, isSuccess } = useGetPostQuery(postId!)
  // const post = useAppSelector((state) => selectPostById(state, postId!))
  const canEdit = currentUsername === post?.user
  useEffect(()=>{
    console.log('data',post)
  },[post])
  let content: React.ReactNode
  if (isFetching) {
    content = <Spinner text="Loading..." />
  } else if (isSuccess) {
    content = (
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
    )
  }

  return (
    <>
      <section>{content}</section>
    </>
  )
}
