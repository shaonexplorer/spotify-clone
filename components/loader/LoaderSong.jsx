import Image from "next/image";

function LoaderSong() {
  return (
    <div className="relative w-[118px] h-[173px]">
      <Image
        src={"/skeleton/song-card.png"}
        fill
        alt="skeleton"
        className="animate-pulse"
      />
    </div>
  );
}

export default LoaderSong;
