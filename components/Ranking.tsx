/* eslint-disable padding-line-between-statements */
import { useGlobalContext } from "@/app/Context/store";
import { FaRankingStar } from "react-icons/fa6";

export default function Ranking() {
  const { userList, resultValue, user, showRanking } = useGlobalContext();

  const sortedUserList = userList.sort((a, b) => b.total - a.total);
  const list = user?.userName && showRanking ? sortedUserList : [1, 2, 3, 4, 5];
  return (
    <div className="rounded-lg">
      <div className="flex items-center mb-2  ">
        <FaRankingStar style={{ height: 20, width: 20, color: "#F2566D" }} />
        <h2 className="text-xl font-bold ml-3 text-white">Ranking</h2>
      </div>
      <div className="bg-[#151A21]  border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="text-xs font-medium  text-gray-400 ">
              <th className="py-1 px-2 text-center">No.</th>
              <th className="py-1 px-8 text-center">Name</th>
              <th className="py-1 px-2 text-center">Score</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => (
              <tr
                key={item}
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
      </div>
    </div>
  );
}
