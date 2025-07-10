import { useState } from 'react'
import { createPost } from '../utils/api'

export default function PostForm({ onCreated }) {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await createPost({ title, content })
    setTitle('')
    setContent('')
    onCreated()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        className="input input-bordered w-full mb-2"
        placeholder="Post title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="textarea textarea-bordered w-full mb-2"
        placeholder="Write markdown here..."
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <button className="btn btn-primary">Post</button>
    </form>
  )
}