import { Post } from '@/interfaces'

interface PostCardProps {
  post: Post
  onView?: () => void
}

const PostCard: React.FC<PostCardProps> = ({ post, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.body}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">User ID: {post.userId}</span>
        {onView && (
          <button
            onClick={onView}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Details
          </button>
        )}
      </div>
    </div>
  )
}

export default PostCard
