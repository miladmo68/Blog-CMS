import { useContext } from 'react'
import { PostContext } from '../context/PostContext'
import PostCard from '../components/PostCard'
import PostForm from '../components/PostForm'
import { getPosts } from '../utils/api'

export default function Home() {
  const { posts, setPosts } = useContext(PostContext)

  const refreshPosts = async () => {
    const data = await getPosts()
    setPosts(data)
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Blog CMS</h1>
      <PostForm onCreated={refreshPosts} />
      {posts.map(post => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  )
}