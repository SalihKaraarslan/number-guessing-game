import Chat from "@/components/Chat";
import CurrentRound from "@/components/CurrentRound";
import Ranking from "@/components/Ranking";
import SpeedSlider from "@/components/SpeedSlider";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className="h-[500px] w-full">
      <div className="h-[500px] grid grid-cols-3 gap-4 ">
        <div className="col-span-1">
          {/* <Welcome /> */}
          <CurrentRound />
          <SpeedSlider />
        </div>
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
