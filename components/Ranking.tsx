export default function Ranking() {
  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-4">
        <svg
          className="w-6 h-6 mr-2 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
        <h2 className="text-xl font-bold text-white">Ranking</h2>
      </div>
      <div className="bg-[#151A21]  border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs font-medium  text-gray-400 ">
              <th className="py-1 px-8 text-left">No.</th>
              <th className="py-1 px-8 text-center">Name</th>
              <th className="py-1 px-12 text-right">Score</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4, 5].map((num) => (
              <tr
                key={num}
                className={`text-xs text-gray-300 ${num % 2 === 0 ? "bg-[#1A232C]" : "bg-[#262E39]"} hover:bg-[#475062]`}
              >
                <td className="py-3 px-8 text-left">{num}</td>
                <td className="py-3 px-8 text-center">-</td>
                <td className="py-3 px-16 text-right">-</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
