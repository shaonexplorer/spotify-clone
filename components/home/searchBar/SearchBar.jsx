import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  return (
    <div className="w-[386px] h-[48px] relative">
      <Image
        src={"/search/search_icon.png"}
        width={24}
        height={24}
        alt="search"
        className="absolute left-[16px] top-[12px]"
      />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key == "Enter") router.push(`/search?q=${query}`);
        }}
        placeholder="Search music, artist, albums..."
        className=" w-full h-full bg-[#212121] rounded-[12px] placeholder:text-[#7F7F7F] text-white text-[16px] py-[12px] pl-[52px] pr-[16px] outline-none"
      ></input>
    </div>
  );
}

export default SearchBar;
