"use client";

import { useRef, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { IoPauseCircle } from "react-icons/io5";
import { AiFillBackward } from "react-icons/ai";
import { AiFillForward } from "react-icons/ai";
import { IoVolumeMedium } from "react-icons/io5";
import Image from "next/image";

function Player({ activeSong }) {
  const [isPlaying, setIsplaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState();

  const ref = useRef();

  return (
    <div className="w-[454px] mx-auto h-[690px] flex flex-col gap-[20px] justify-end items-center p-[28px]">
      <section className="flex flex-col gap-[5px] w-full">
        <div className="flex items-center justify-between">
          <p className="text-white">
            0{Math.floor(time / 60)} : {Math.floor(time % 60)}
          </p>
          <p className="text-white">
            {ref.current?.duration ? Math.floor(ref.current?.duration) : "00"} :
            00
          </p>
        </div>
        <input
          type="range"
          value={time}
          onChange={(e) => (ref.current.currentTime = e.target.value)}
          min={0}
          max={ref.current?.duration || 0}
          step="any"
          className="w-full h-[3px]"
        ></input>
      </section>

      <section className="w-full flex items-center gap-[48px] justify-center">
        <AiFillBackward size={30} className="text-blue-500 cursor-pointer" />
        {isPlaying ? (
          <IoPauseCircle
            onClick={() => {
              setIsplaying(false);
              ref.current?.pause();
            }}
            size={64}
            className="cursor-pointer text-blue-500"
          />
        ) : (
          <IoIosPlayCircle
            onClick={() => {
              setIsplaying(true);
              ref?.current?.play();
            }}
            size={64}
            className="cursor-pointer text-blue-500"
          />
        )}
        <AiFillForward size={30} className="text-blue-500 cursor-pointer" />
      </section>

      <section className="flex items-center gap-[10px]">
        <IoVolumeMedium size={21} className="text-neutral-500" />
        <input
          min={0}
          max={1}
          onChange={(event) => (ref.current.volume = event.target.value)}
          step={"any"}
          type="range"
          className="w-[260px] h-[3px]"
        ></input>
      </section>

      <audio
        autoPlay
        ref={ref}
        src={activeSong}
        onTimeUpdate={(e) => setTime(e.target.currentTime)}
        onEnded={() => setIsplaying(false)}
      ></audio>
    </div>
  );
}

export default Player;
