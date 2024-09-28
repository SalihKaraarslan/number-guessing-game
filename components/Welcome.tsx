export default function Welcome() {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-800 rounded-xl shadow-xl">
      <h1 className="absolute top-1/4  text-2xl font-semibold text-center text-gray-400">
        Welcome
      </h1>
      <div className="w-full h-full max-w-md flex flex-col justify-center">
        <div className="space-y-3">
          <p className="text-center text-xs font-small text-gray-400">
            Please Insert Your Name
          </p>
          <input
            className="w-full px-3 py-3 bg-[#151A21] border border-gray-800 rounded-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
            type="text"
          />
          <button className="w-full py-3 bg-[#8790A4] hover:bg-gray-600 text-white font-semibold rounded-md transition duration-300">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
