const ScoreCard = () => {
  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center px-4">
      <div className="max-w-xl text-center bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">🚧 Coming Soon!</h1>
        <p className="text-gray-700 text-lg mb-6">
          Still working on this feature to make your experience even better.
          Stay tuned — it’ll available soon!
        </p>

        <div className="flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  )
}

export default ScoreCard;