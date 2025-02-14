import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { addNewPost, Post } from './postsSlice'
import { nanoid } from '@reduxjs/toolkit'
import { selectAllUsers } from '../users/usersSlice'
import { selectCurrentUsername } from '../auth/authslice'
import { useState } from 'react'

export interface AddPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
  postAuthor: HTMLSelectElement
}

interface AddPostFormElements extends HTMLFormElement {
  readonly elements: AddPostFormFields
}

export const AddPostForm = () => {
  const dispatch = useAppDispatch()
  const [addRequestStatus, setAddRequestStatus] = useState<'idle' | 'pending'>('idle')
  const currentUsername = useAppSelector(selectCurrentUsername)!
  const users = useAppSelector(selectAllUsers)
  const handleSubmit = async (e: React.FormEvent<AddPostFormElements>) => {
    e.preventDefault()
    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value
    const userId = currentUsername

    // dispatch(postAdded(title, content, userId))

    try {
      setAddRequestStatus('pending')
      await dispatch(addNewPost({ title, content, user: userId })).unwrap()
      e.currentTarget.reset()
    } catch (err) {
      console.error('Failed to save the post:', err)
    } finally {
      setAddRequestStatus('idle')
    }
  }
  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue="" required />
        {/* <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" name="postAuthor" required>
          <option value=""></option>
          {usersOptions}
        </select> */}
        <label htmlFor="postContent">Content:</label>
        <textarea id="postContent" name="postContent" defaultValue="" required />
        <button>Save Post</button>
      </form>
    </section>
  )
}
