import LoaderPopularSong from "@/components/loader/LoaderPopularSong";
import SongCardPopular from "@/components/songCard/SongCardPopular";
import { getTopPlayList } from "@/lib/actions/songs";
import { useEffect, useState } from "react";

function PopularSongs() {
  const [songList, setSongList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSongs = async () => {
      try {
        setIsLoading(true);
        const data = await getTopPlayList();
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
    <div className="w-full h-full flex flex-col gap-[20px] mt-[25px] ">
      <h1 className="font-bold text-[20px] text-white capitalize">
        popular songs
      </h1>
      <main className="w-full h-full flex flex-wrap flex-col ">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7].map((_, index) => (
              <LoaderPopularSong key={index} />
            ))
          : songList &&
            songList.map((song, index) => (
              <SongCardPopular song={song} index={index} key={index} />
            ))}
      </main>
    </div>
  );
}

export default PopularSongs;
