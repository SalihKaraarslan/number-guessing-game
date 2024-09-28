import Chart from "@/components/Chart";
import Chat from "@/components/Chat";
import CurrentRound from "@/components/CurrentRound";
import Ranking from "@/components/Ranking";
import SpeedSlider from "@/components/SpeedSlider";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <div className=" w-full">
      <div className=" grid grid-cols-3 gap-4 ">
        <div className="col-span-1">
          {/* <Welcome /> */}
          <CurrentRound />
          <SpeedSlider />
        </div>
        <div className="col-span-2 ">
          <Chart />
        </div>
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
