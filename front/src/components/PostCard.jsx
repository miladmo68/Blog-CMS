import ReactMarkdown from 'react-markdown'

export default function PostCard({ post }) {
  return (
    <div className="card bg-base-100 shadow-md mb-4 p-4">
      <h2 className="text-xl font-bold">{post.title}</h2>
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  )
}