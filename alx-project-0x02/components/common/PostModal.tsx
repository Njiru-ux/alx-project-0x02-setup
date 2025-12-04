import { Post } from '@/interfaces'

interface PostModalProps {
  post: Post | null
  isOpen: boolean
  onClose: () => void
}

const PostModal: React.FC<PostModalProps> = ({ post, isOpen, onClose }) => {
  if (!isOpen || !post) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 mb-1">Content:</h4>
              <p className="text-gray-600 whitespace-pre-line">{post.body}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-1">User ID:</h4>
              <p className="text-gray-600">{post.userId}</p>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-1">Post ID:</h4>
              <p className="text-gray-600">{post.id}</p>
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostModal
