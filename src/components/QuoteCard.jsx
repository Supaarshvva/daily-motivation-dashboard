import { FaHeart, FaRegHeart } from "react-icons/fa";

function QuoteCard({
  quote,
  author,
  fetchQuote,
  toggleLike,
  isLiked,
  loading,
}) {
  return (
    <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-xl text-center max-w-2xl w-full transition hover:scale-[1.02] duration-300">

      <p className="text-xl md:text-2xl italic leading-relaxed">
        "{quote}"
      </p>

      <h3 className="mt-4 text-yellow-400 font-semibold text-lg">
        — {author}
      </h3>

      <div className="flex justify-center gap-6 mt-6">

        <button
          onClick={fetchQuote}
          disabled={loading}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 rounded-full font-semibold hover:scale-105 transition disabled:opacity-50"
        >
          New Quote
        </button>

        <button
          onClick={toggleLike}
          className="text-3xl text-red-400 hover:scale-125 transition"
        >
          {isLiked ? <FaHeart /> : <FaRegHeart />}
        </button>

      </div>
    </div>
  );
}

export default QuoteCard; 