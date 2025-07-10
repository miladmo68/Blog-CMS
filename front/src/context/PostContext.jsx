import { createContext, useState, useEffect } from 'react'
import { getPosts } from '../utils/api'

export const PostContext = createContext()

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts().then(data => setPosts(data))
  }, [])

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  )
}