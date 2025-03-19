import SongCard from "@/components/songCard/SongCard";
import { fetchSongs } from "@/lib/actions/songs";
import { useEffect, useState } from "react";

import LoaderSong from "@/components/loader/LoaderSong";

function PopularReleases() {
  const [songList, setSongList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchSongs();

        setSongList(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-[250px] flex flex-col gap-[24px] mt-[32px]">
      <div className="w-full flex items-center justify-between">
        <h1 className="font-bold text-[20px] text-white capitalize">
          popular releases
        </h1>
        <p className="font-semibold text-[16px] text-[#1DB954] capitalize">
          see all
        </p>
      </div>
      <div className="w-full h-[173px] flex flex-wrap  items-center gap-[20px] overflow-hidden">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
              <LoaderSong key={index} />
            ))
          : songList &&
            songList.map((song, i) => <SongCard key={i} song={song} />)}
      </div>
    </div>
  );
}

export default PopularReleases;
