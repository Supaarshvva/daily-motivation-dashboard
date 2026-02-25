function LikedQuotes({ likedQuotes }) {
  return (
    <div className="mt-10 w-full max-w-2xl">

      <h2 className="text-2xl font-bold text-green-400 mb-4">
        ❤️ Liked Quotes
      </h2>

      {likedQuotes.length === 0 ? (
        <p className="text-gray-400 text-center">
          No matching quotes found
        </p>
      ) : (
        <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
          {likedQuotes.map((q) => (
            <div
              key={q.quote}
              className="bg-white/10 border border-white/20 p-4 rounded-lg"
            >
              <p>"{q.quote}"</p>
              <span className="text-sm text-yellow-300">
                — {q.author}
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default LikedQuotes;