import Image from "next/image";
import Notification from "./searchBar/Notification";
import SearchBar from "./searchBar/SearchBar";
import Link from "next/link";

function TopNavigation({ currentPage }) {
  return (
    <div className="w-full h-[48px] flex items-center justify-between">
      <div className="flex items-center gap-[8px]">
        <Link href={"/"}>
          <p className="text-[#7F7F7F] text-[14px] font-semibold capitalize">
            home
          </p>
        </Link>

        <Image src={"/search/arrow.png"} width={14} height={14} alt="arrow" />
        <p className="text-white text-[14px] font-semibold capitalize">
          {currentPage}
        </p>
      </div>

      <div className=" flex items-center gap-[24px]">
        <SearchBar />
        <Notification />
      </div>
    </div>
  );
}

export default TopNavigation;
