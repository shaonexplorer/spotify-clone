import Image from "next/image";

function LoaderRecentSong() {
  return (
    <div className="relative w-[234px] h-[44px]">
      <Image
        src={"/skeleton/song-card-recent.png"}
        fill
        alt="skeleton"
        className="animate-pulse"
      />
    </div>
  );
}

export default LoaderRecentSong;
