import { CardProps } from '@/interfaces'

const Card: React.FC<CardProps> = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {children && (
          <div className="mt-4">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
