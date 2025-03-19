"use client";

import { getRecentPlay, getTopPlayList } from "@/lib/actions/songs";
import { useEffect, useState } from "react";
import SongCardRecent from "../songCard/SongCardRecent";
import LoaderRecentSong from "../loader/LoaderRecentSong";

function RecentlyPlayed() {
  const [songList, setSongList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSongs = async () => {
      try {
        setIsLoading(true);
        const data = await getRecentPlay();
        setSongList(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getSongs();
  }, []);

  return (
    <div className="w-full flex flex-col gap-[16px]">
      <span className="w-full flex items-center justify-between">
        <h1 className="text-[18px] font-bold text-white capitalize">
          recent played
        </h1>
        <p className="text-[#1DB954] text-[16px] font-semibold capitalize">
          see all
        </p>
      </span>
      <div className="w-[234px] flex flex-col gap-[20px]">
        {isLoading
          ? [1, 2, 3, 4, 5].map((_, index) => <LoaderRecentSong key={index} />)
          : songList &&
            songList
              .slice(0, 5)
              .map((song, index) => <SongCardRecent key={index} song={song} />)}
      </div>
    </div>
  );
}

export default RecentlyPlayed;
