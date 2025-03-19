"use client";

import Image from "next/image";
import { FaPauseCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoMdVolumeMute } from "react-icons/io";

import { useEffect, useRef, useState } from "react";
import { setIsPlaying } from "@/redux/features/songs/songSlice";
import { useDispatch, useSelector } from "react-redux";

function MusicPlayer() {
  const ref = useRef();
  const currentSong = useSelector((state) => state.songs.currentSong);
  const isPlaying = useSelector((state) => state.songs.isPlaying);
  const dispatch = useDispatch();

  const [currentPlayTime, setCurrentPlayTime] = useState(0);
  const [mute, setMute] = useState(false);
  const [volume, setVolume] = useState(0.2);

  useEffect(() => {
    if (currentSong) {
      ref.current.src = currentSong.preview;
      if (!mute) ref.current.volume = 0.3;
    }
  }, [currentSong]);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
    } else if (!isPlaying) ref.current?.pause();
  }, [isPlaying]);

  useEffect(() => {
    if (mute == true) {
      setVolume(0);
    } else setVolume(0.3);
  }, [mute]);

  useEffect(() => {
    if (ref.current) {
      ref.current.volume = volume;
    }
  }, [volume]);

  if (currentSong.length == 0) return null;

  return (
    <div className="fixed z-20 bottom-0 sm:w-[1440px] 2xl:w-full mx-auto  h-[85px] test px-[32px] flex items-center  ">
      <audio
        ref={ref}
        autoPlay
        onTimeUpdate={(e) => setCurrentPlayTime(e.target.currentTime)}
        onEnded={() => dispatch(setIsPlaying(false))}
      />

      <input
        type="range"
        step={"any"}
        value={currentPlayTime}
        min={0}
        max={ref.current?.duration || 0}
        onChange={(e) => (ref.current.currentTime = e.target.value)}
        className="inset-0 fixed sm:w-[1440px] 2xl:w-full h-[4px] rounded-[12px]"
      ></input>
      <div className="w-full h-[64px] flex items-center justify-between">
        <div id="details" className="w-[325px] flex items-center gap-[16px]">
          <Image
            src={currentSong?.album?.cover_small || "/player/Image.png"}
            width={54}
            height={54}
            alt="cover"
            className="rounded-[12px]"
          />
          <div className={`flex flex-col max-w-[140px]`}>
            <p className="text-[18px] font-semibold text-white capitalize truncate">
              {currentSong.title_short || "shape of you"}
            </p>
            <p className="text-[14px] text-[#D2D2D2] capitalize truncate">
              {currentSong.artist?.name || "Ed Sheeran"}
            </p>
          </div>
          <Image
            src={"/player/favorite.png"}
            width={24}
            height={24}
            alt="favorite"
            className="ml-[30px] mr-[35px]"
          />
        </div>
        <div
          id="play"
          className="flex items-center h-full justify-between gap-[24px]"
        >
          <Image
            src={"/player/suffle.png"}
            width={24}
            height={24}
            alt="shuffle"
            className="cursor-pointer"
          />
          <button>
            <Image
              src={"/player/back.png"}
              width={24}
              height={24}
              alt="back"
              className="cursor-pointer"
            />
          </button>

          <button className="hover:scale-105 transition-all duration-500">
            {isPlaying ? (
              <FaPauseCircle
                onClick={() => {
                  dispatch(setIsPlaying(false));
                  ref.current.pause();
                }}
                className="text-white w-[48px] h-[48px] cursor-pointer"
              />
            ) : (
              <FaPlayCircle
                onClick={() => {
                  dispatch(setIsPlaying(true));
                  ref.current.play();
                }}
                className="text-white w-[48px] h-[48px] cursor-pointer"
              />
            )}
          </button>

          <button>
            <Image
              src={"/player/next.png"}
              width={24}
              height={24}
              alt="next"
              className="cursor-pointer"
            />
          </button>

          <Image
            src={"/player/repeat.png"}
            width={24}
            height={24}
            alt="shuffle"
            className="cursor-pointer"
          />
        </div>
        <div id="volume" className="flex items-center gap-[24px]">
          <p className="w-[90px] text-[#949494] text-[18px]">
            {Math.floor(currentPlayTime / 60)}:
            {Math.floor(currentPlayTime % 60)} /
            {Math.floor(ref.current?.duration / 60) || 0}:
            {Math.floor(ref.current?.duration % 60) || 0}
          </p>
          {mute ? (
            <IoMdVolumeMute
              className="w-[24px] h-[24px] text-white cursor-pointer"
              onClick={() => setMute(!mute)}
            />
          ) : (
            <IoMdVolumeHigh
              className="w-[24px] h-[24px] text-white cursor-pointer"
              onClick={() => setMute(!mute)}
            />
          )}
          <input
            type="range"
            value={volume}
            min={0}
            max={1}
            onChange={(e) => setVolume(e.target.value)}
            step={"any"}
            className="w-[99px] h-[4px]"
          ></input>
          <Image
            src={"/player/music-filter.png"}
            width={24}
            height={24}
            alt="filter"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
