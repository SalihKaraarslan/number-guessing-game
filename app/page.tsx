import Chat from "@/components/Chat";
import Ranking from "@/components/Ranking";

export default function Home() {
  return (
    <div className="h-[500px] w-full">
      <div className="h-[500px] grid grid-cols-3 gap-4 ">
        <div className="col-span-1 bg-red-500">salih</div>
        <div className="col-span-2  bg-blue-500">salih</div>
      </div>
      <div className=" grid grid-cols-2 my-6 gap-4 ">
        <div className="col-span-1">
          <Ranking />
        </div>
        <div className="col-span-1">
          <Chat />
        </div>
      </div>
    </div>
  );
}
