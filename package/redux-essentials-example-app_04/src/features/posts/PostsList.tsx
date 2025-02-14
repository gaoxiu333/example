import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { Link } from 'react-router-dom'
import {
  fetchPosts,
  Post,
  selectAllPosts,
  selectPostById,
  selectPostError,
  selectPostIds,
  selectPostsStatus,
} from './postsSlice'
import { TimeAgo } from './TimeAgo'
import { useEffect, useMemo } from 'react'
import { Spinner } from '@/components/Spinner'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetPostsQuery } from '@/api/apislice'

interface PostExcerptProps {
  post: Post
}

let PostExcerpt = ({ post }: PostExcerptProps) => {
  // const post = useAppSelector((state) => selectPostById(state, postId))
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
  const { data: posts = [], isLoading, isSuccess, isError, error, refetch } = useGetPostsQuery()
  // const posts = useSelector(selectAllPosts)
  // const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date!))
  const sortedPosts = useMemo(() => {
    const sorted = posts.slice()
    sorted.sort((a, b) => b.date.localeCompare(a.date))
    return sorted
  }, [posts])
  const postStatus = useAppSelector(selectPostsStatus)
  const postError = useAppSelector(selectPostError)
  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [dispatch, postStatus])
  let content: React.ReactNode
  if (isLoading) {
    content = <Spinner text="Loading" />
  } else if (isSuccess) {
    // const orderedPosts = posts.slice().sort((a, b) => a.date.localeCompare(a.date))
    // const orderPostIds = useSelector(selectPostIds)

    content = sortedPosts.map((post) => <PostExcerpt key={post.id} post={post} />)
  } else if (isError) {
    content = <div>{error.toString()}</div>
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
        <button onClick={refetch}>Refetch Posts</button>
        {content}
      </section>
    </>
  )
}
