import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  return (
    <div className=" container   relative">
      <Image
        src={"/search/search_icon.png"}
        width={24}
        height={24}
        alt="search"
        className="absolute left-[16px] top-[10px]"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") router.push(`/search?q=${query}`);
        }}
        placeholder="Search music, artist, albums..."
        className=" w-full sm:min-w-[500px]    bg-[#212121] rounded-[12px] placeholder:text-[#7F7F7F] text-white text-[16px] py-2 pl-[52px] pr-[16px] outline-none"
      ></input>
    </div>
  );
}

export default SearchBar;
