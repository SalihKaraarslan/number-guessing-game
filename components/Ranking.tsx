import { useGlobalContext } from "@/app/Context/store";
import { FaRankingStar } from "react-icons/fa6";

export default function Ranking() {
  const { userList, resultValue, user, showRanking } = useGlobalContext();

  const sortedUserList = [...userList].sort((a, b) => {
    const aValue =
      a.multiplier < resultValue ? a.multiplier * (a.point || 0) : 0;
    const bValue =
      b.multiplier < resultValue ? b.multiplier * (b.point || 0) : 0;

    return bValue - aValue;
  });
  const list =
    user?.userName && showRanking
      ? sortedUserList
      : Array(5).fill({ userName: "-", multiplier: 0, point: 0 });

  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-2">
        <FaRankingStar style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Ranking</h2>
      </div>
      <div className="bg-[#151A21] border border-gray-800 rounded-xl overflow-hidden">
        {showRanking && userList.length === 0 ? (
          <div className="text-gray-400 text-center py-3">
            No rankings available
          </div>
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-xs font-medium text-gray-400">
                <th scope="col" className="py-1 px-2 text-center">
                  No.
                </th>
                <th scope="col" className="py-1 px-8 text-center">
                  Name
                </th>
                <th scope="col" className="py-1 px-2 text-center">
                  Score
                </th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr
                  key={item.userName === "-" ? index : item.userName}
                  className={`text-xs font-bold text-gray-300 ${index % 2 === 0 ? "bg-[#1A232C]" : "bg-[#262E39]"} hover:bg-[#475062]`}
                >
                  <td className="py-3 px-2 text-center">{index + 1}</td>
                  <td className="py-3 px-8 text-center">
                    {item.userName === user.userName
                      ? "You"
                      : item.userName || "-"}
                  </td>
                  <td className="py-3 px-2 text-center">
                    {Number(resultValue) > item.multiplier
                      ? (item.multiplier * item.point).toFixed(0)
                      : showRanking
                        ? 0
                        : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
