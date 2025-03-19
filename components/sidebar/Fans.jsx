import Image from "next/image";

function Fans() {
  return (
    <div className="w-full flex flex-col items-center gap-[12px]">
      <span className="w-full flex items-center justify-between">
        <h1 className="text-[18px] font-bold text-white capitalize">
          Fans Also Like
        </h1>
        <p className="text-[#1DB954] text-[16px] font-semibold capitalize">
          see all
        </p>
      </span>

      <div className="w-full h-[234px] relative mt-[5px]">
        <Image
          src={"/sidebar/artist.png"}
          width={234}
          height={234}
          alt="artist"
          className=""
        />
        <div className="absolute w-full bottom-0 left-0 bg-[#121212]/64 p-[16px] flex flex-col gap-[4px]">
          <p className="text-[14px] font-semibold text-white capitalize">
            James Arthur
          </p>
          <p className="text-[12px] text-[#949494]">Artist</p>
        </div>
      </div>

      <Image src={"/sidebar/Slide.png"} width={56} height={8} alt="slide" />
    </div>
  );
}

export default Fans;
