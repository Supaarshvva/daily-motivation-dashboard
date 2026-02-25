function Header({ count }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-yellow-400">
        🌞 Daily Motivation
      </h1>

      <p className="text-gray-400">
        You liked {count} quotes
      </p>
    </div>
  );
}

export default Header;