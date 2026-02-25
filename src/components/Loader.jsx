function Loader() {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-yellow-400">Fetching motivation...</p>
    </div>
  );
}

export default Loader;