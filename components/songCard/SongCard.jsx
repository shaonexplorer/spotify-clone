import { setCurrentSong, setIsPlaying } from "@/redux/features/songs/songSlice";
import Image from "next/image";
import { useState } from "react";

import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";

import { useDispatch, useSelector } from "react-redux";

function SongCard({ song }) {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        currentSong?.id == song.id ? " " : ""
      } w-[118px] h-[173px]   flex flex-col gap-[16px] relative cursor-pointer   transition-all duration-500`}
    >
      {(hover && currentSong.id !== song.id) ||
      (currentSong.id == song.id && !isPlaying) ? (
        <IoIosPlayCircle
          onClick={() => dispatch(setCurrentSong(song))}
          className=" z-30 absolute left-[60%] top-[40%] w-[40px] h-[40px] text-[#1DB954] hover:scale-[120%] transition-all duration-300"
        />
      ) : currentSong.id == song.id && isPlaying ? (
        <IoPauseCircle
          onClick={() => dispatch(setIsPlaying(false))}
          className=" z-30 absolute left-[60%] top-[40%] w-[40px] h-[40px] text-[#1DB954] hover:scale-[120%] transition-all duration-300"
        />
      ) : null}

      <div className="w-full h-[118px] rounded-[12px] overflow-hidden">
        <Image
          width={118}
          height={118}
          alt="cover"
          src={song.album.cover_big}
          className="rounded-[10px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-[4px]">
        <p className="text-[14px] font-semibold text-white truncate">
          {song.album.title}
        </p>
        <p className="text-[12px] font-normal text-[#949494]">
          {song.artist.name}
        </p>
      </div>
    </div>
  );
}

export default SongCard;
