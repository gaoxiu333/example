import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Link } from 'react-router-dom'
import { fetchPosts, Post, selectAllPosts, selectPostById, selectPostError, selectPostIds, selectPostsStatus } from './postsSlice'
import { TimeAgo } from './TimeAgo'
import { useEffect } from 'react'
import { Spinner } from '@/components/Spinner'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import React from 'react'
import { useSelector } from 'react-redux'

interface PostExcerptProps {
  postId: string
}

let PostExcerpt = ({ postId }: PostExcerptProps) => {
  const post = useAppSelector((state) => selectPostById(state, postId))
  return (
    <article className="post-excerpt" key={post.id}>
      <h3>
        <Link to={`/posts/${post.id}`}>{post.title}</Link>
      </h3>
      <div>
        <PostAuthor userId={post.user} />
        <TimeAgo timestamp={post.date} />
      </div>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
    </article>
  )
}
PostExcerpt = React.memo(PostExcerpt) as any

export const PostList = () => {
  const dispatch = useAppDispatch()
  const posts = useSelector(selectAllPosts)
  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date!))
  const postStatus = useAppSelector(selectPostsStatus)
  const postError = useAppSelector(selectPostError)
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, postStatus])
  let content: React.ReactNode
  if (postStatus === 'pending') {
    content = <Spinner text="Loading" />
  } else if (postStatus === 'succeeded') {
    // const orderedPosts = posts.slice().sort((a, b) => a.date.localeCompare(a.date))
  const orderPostIds = useSelector(selectPostIds)

    content = orderPostIds.map((postId) => <PostExcerpt key={postId} postId={postId} />)
  } else if (postStatus === 'failed') {
    content = <div>{postError}</div>
  }

  // const renderedPosts = orderPostIds.map((post) => (
  //   <article key={post.id} className="post-excerpt">
  //     <h3>
  //       <Link to={`/posts/${post.id}`}>{post.title}</Link>
  //     </h3>
  //     <p className="post-content">{post.content.substring(0, 100)}</p>
  //     <TimeAgo timestamp={post.date!} />
  //   </article>
  // ))
  return (
    <>
      <section className="posts-list">
        <h2>Posts </h2>
        {content}
      </section>
    </>
  )
}
