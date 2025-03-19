import { setCurrentSong, setIsPlaying } from "@/redux/features/songs/songSlice";
import Image from "next/image";
import { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoIosPause } from "react-icons/io";

import { useDispatch, useSelector } from "react-redux";

function SongCardPopular({ song, index }) {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const [hover, setHover] = useState(false);
  const isPlaying = useSelector((state) => state.songs.isPlaying);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        currentSong?.id == song?.id ? "bg-gradient-to-r" : ""
      } z-20 w-full h-[70px] px-[20px] flex items-center cursor-pointer hover:bg-gradient-to-r from-0% to-100% from-neutral-800 to-neutral-900 transition-all duration-500`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <div id="cover" className="flex items-center gap-[24px]">
          <p className="w-[15px] text-[16px] font-bold text-white">
            {/* {index + 1} */}
            {(hover && currentSong.id !== song.id) ||
            (currentSong.id == song.id && !isPlaying) ? (
              <IoIosPlay
                onClick={() => dispatch(setCurrentSong(song))}
                className="z-30  w-[20px] h-[20px] "
              />
            ) : currentSong.id == song.id && isPlaying ? (
              <IoIosPause
                onClick={() => dispatch(setIsPlaying(false))}
                className="z-30   w-[20px] h-[20px] "
              />
            ) : (
              index + 1
            )}
          </p>
          <div className="w-[268] flex items-center gap-[16px]">
            <Image
              src={song.album.cover_big}
              width={54}
              height={54}
              alt="cover"
              className="rounded-[12px]"
            />
            <p className="text-[16px] font-bold text-white truncate">
              {song.title_short}
            </p>
          </div>
        </div>

        <div id="others" className="flex items-center gap-[56px]">
          <div className="flex items-center gap-[12px]">
            <Image
              src={"/banner/listener.png"}
              width={24}
              height={24}
              alt="audio"
            />
            <p className="text-[16px] font-bold text-white">{song.rank}</p>
          </div>

          <div className="w-[75px] flex items-center gap-[12px]">
            <Image
              src={"/song_card/duration.png"}
              width={24}
              height={24}
              alt="duration"
            />
            <p className="text-[16px] font-bold text-white">
              {Math.floor(song.duration / 60)}:{Math.floor(song.duration % 60)}
            </p>
          </div>

          <Image
            src={"/player/favorite.png"}
            width={24}
            height={24}
            alt="favourite"
          />

          <Image
            src={"/song_card/menu.png"}
            width={24}
            height={24}
            alt="menu"
          />
        </div>
      </div>
    </div>
  );
}

export default SongCardPopular;
