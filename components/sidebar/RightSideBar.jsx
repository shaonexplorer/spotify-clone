import Account from "./Account";
import Fans from "./Fans";
import RecentlyPlayed from "./RecentlyPlayed";

function RightSideBar() {
  return (
    <div className="hidden sm:flex min-w-[300px] sticky top-0    h-screen bg-[#212121]   text-white">
      <div className="  text-white ">
        <main className="w-full sm:p-[32px] flex flex-col gap-[44px]">
          <Account />
          <Fans />
          <RecentlyPlayed />
        </main>
      </div>
    </div>
  );
}

export default RightSideBar;
