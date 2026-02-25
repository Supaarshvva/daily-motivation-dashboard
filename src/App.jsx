import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import QuoteCard from "./components/QuoteCard";
import LikedQuotes from "./components/LikedQuotes";
import Loader from "./components/Loader";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);

  const [likedQuotes, setLikedQuotes] = useState(() => {
    const saved = localStorage.getItem("likedQuotes");
    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://dummyjson.com/quotes/random");

      setQuote(res.data.quote);
      setAuthor(res.data.author);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchQuote();
  }, []);


  useEffect(() => {
    localStorage.setItem("likedQuotes", JSON.stringify(likedQuotes));
  }, [likedQuotes]);


  const toggleLike = () => {
    const exists = likedQuotes.find((q) => q.quote === quote);

    if (exists) {
      setLikedQuotes(likedQuotes.filter((q) => q.quote !== quote));
    } else {
      setLikedQuotes([...likedQuotes, { quote, author }]);
    }
  };

  const isLiked = likedQuotes.some((q) => q.quote === quote);


  const filteredQuotes = likedQuotes.filter((q) =>
    q.quote.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white flex flex-col items-center px-4 py-10">

      <Header count={likedQuotes.length} />

      {loading ? (
        <Loader />
      ) : (
        <QuoteCard
          quote={quote}
          author={author}
          fetchQuote={fetchQuote}
          toggleLike={toggleLike}
          isLiked={isLiked}
          loading={loading}
        />
      )}

      {/* 🔍 SEARCH INPUT */}

      <div className="w-full max-w-2xl mt-10">
        <input
          type="text"
          placeholder="Search liked quotes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      {/* ❤️ LIKED QUOTES LIST */}

      <LikedQuotes likedQuotes={filteredQuotes} />

    </div>
  );
}

export default App;