export default function InfoBox({ icon, value }) {
  return (
    <div className="inline-flex items-center w-full justify-between bg-gray-800 rounded-lg border border-gray-700 bg-gradient-to-r from-[#171C24] to-[#242B36] px-3 h-14">
      {icon}
      <span className="text-white font-semibold text-lg flex-grow text-center">
        {value}
      </span>
      <div className="w-5" />
    </div>
  );
}
