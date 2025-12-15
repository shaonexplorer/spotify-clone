import Image from "next/image";
import Notification from "./searchBar/Notification";
import SearchBar from "./searchBar/SearchBar";
import Link from "next/link";
import { Menu, PanelLeft } from "lucide-react";
import { useSidebar } from "../ui/sidebar";

function TopNavigation({ currentPage }) {
  const { toggleSidebar } = useSidebar();
  return (
    <div className="w-full bg-neutral/70  backdrop-blur-sm     inset-0 z-50  sticky   flex items-center justify-between sm:justify-between px-4 py-4 gap-4">
      <PanelLeft onClick={toggleSidebar} className="text-neutral-400" />
      {/* <Menu onClick={toggleSidebar} className="text-neutral-400" /> */}
      <div className="  items-center gap-[8px] hidden">
        <Link href={"/"}>
          <p className="text-[#7F7F7F] text-[14px] font-semibold capitalize  ">
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
