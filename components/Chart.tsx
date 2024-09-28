export default function Chart() {
  return (
    <div className="flex flex-col items-center bg-gray-900 p-4 w-full">
      {/* Çizgi */}
      <div className="w-full border-t border-gray-500 mb-4"></div>
      {/* Sayılar */}
      <div className="grid grid-cols-10 w-full text-gray-500 text-lg">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
          <div
            key={number}
            className="text-center hover:text-white cursor-pointer"
          >
            {number}
          </div>
        ))}
      </div>
    </div>
  );
}
