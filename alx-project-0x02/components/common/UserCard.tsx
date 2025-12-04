import { User } from '@/interfaces'

interface UserCardProps {
  user: User
  onView?: () => void
}

const UserCard: React.FC<UserCardProps> = ({ user, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">
              {user.name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-gray-600 text-sm mt-1">{user.email}</p>
          {user.phone && (
            <p className="text-gray-500 text-xs mt-1">Ì≥± {user.phone}</p>
          )}
          {user.website && (
            <p className="text-gray-500 text-xs mt-1">Ìºê {user.website}</p>
          )}
        </div>
      </div>
      {onView && (
        <div className="mt-4 text-right">
          <button
            onClick={onView}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Profile
          </button>
        </div>
      )}
    </div>
  )
}

export default UserCard
