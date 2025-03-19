import Account from "./Account";
import Fans from "./Fans";
import RecentlyPlayed from "./RecentlyPlayed";

function RightSideBar() {
  return (
    <div className="w-[300px] min-h-screen bg-[#212121] text-white">
      <div className="fixed h-screen text-white ">
        <main className="w-full p-[32px] flex flex-col gap-[44px]">
          <Account />
          <Fans />
          <RecentlyPlayed />
        </main>
      </div>
    </div>
  );
}

export default RightSideBar;
