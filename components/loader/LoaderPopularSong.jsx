import Image from "next/image";

function LoaderPopularSong() {
  return (
    <div className="relative w-full h-[70px] flex items-center justify-between">
      <Image
        src={"/skeleton/popular-song/Detail.png"}
        width={268}
        height={54}
        alt="skeleton"
        className="animate-pulse"
      />

      <Image
        src={"/skeleton/popular-song/Record.png"}
        width={464}
        height={24}
        alt="skeleton"
      />
    </div>
  );
}

export default LoaderPopularSong;
