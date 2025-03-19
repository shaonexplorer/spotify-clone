import { setCurrentSong, setIsPlaying } from "@/redux/features/songs/songSlice";
import Image from "next/image";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

function SongCardRecent({ song }) {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`relative p-[5px] w-[234px] flex justify-between items-center hoverEffect overflow-hidden cursor-pointer ${
        currentSong.id == song.id ? "grad " : ""
      }`}
    >
      {(hover && currentSong.id !== song.id) ||
      (currentSong.id == song.id && !isPlaying) ? (
        <IoIosPlayCircle
          onClick={() => dispatch(setCurrentSong(song))}
          className="z-30 absolute left-[85%] top-[18%] w-[30px] h-[30px] text-[#1DB954] hover:scale-[120%] transition-all duration-300"
        />
      ) : currentSong.id == song.id && isPlaying ? (
        <IoPauseCircle
          onClick={() => dispatch(setIsPlaying(false))}
          className="z-30 absolute left-[85%] top-[18%] w-[30px] h-[30px] text-[#1DB954] hover:scale-[120%] transition-all duration-300"
        />
      ) : null}

      <div className="  flex items-center gap-[12px]">
        <Image
          src={song.album.cover_medium}
          width={44}
          height={44}
          alt="cover"
          className="rounded-[8px]"
        />
        <div className="flex flex-col gap-[4px]">
          <p className="w-[120px] text-[14px] font-semibold text-white truncate">
            {song.album.title}
          </p>
          <p className="text-[12px] font-normal text-[#949494] truncate">
            {song.artist.name}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SongCardRecent;
