import Image from "next/image";

function Banner() {
  return (
    <div className=" container h-[295px] rounded-[16px] bg-[url(/banner/Background.png)] bg-cover py-[30px] sm:px-[56px] mt-[10px] relative">
      <div className="flex flex-col gap-[30px]">
        <div id="text" className="flex flex-col">
          <div className="flex items-center gap-[12px]">
            <Image
              src={"/banner/verified.png"}
              width={24}
              height={24}
              alt="verified"
            />
            <p className="text-[#949494] text-[16px] font-medium capitalize">
              verified artist
            </p>
          </div>
          <h1 className="font-bold text-[50px] text-white capitalize">
            ed sheeran
          </h1>
          <div className="flex items-center gap-[12px] mt-[16px]">
            <Image
              src={"/banner/listener.png"}
              width={24}
              height={24}
              alt="verified"
            />
            <p className="text-white text-[12px] sm:text-[16px] font-medium capitalize">
              8,72,54,136
            </p>
            <p className="text-[#949494] text-[12px] sm:text-[16px] font-medium capitalize">
              monthly listener
            </p>
          </div>
        </div>
        <div id="button" className="flex items-center gap-[12px]">
          <button className="w-fit h-[34px] px-[10px] sm:h-[46px] bg-[#1DB954] h-[34px] px-[10px] sm:px-[24px] rounded-[44px] text-[12px] sm:text-[16px] font-bold text-white cursor-pointer">
            PLAY
          </button>
          <button className="w-fit h-[34px] px-[10px] sm:h-[46px] bg-transparent border border-white h-[34px] px-[10px] sm:px-[24px] rounded-[44px] text-[12px] sm:text-[16px] font-bold text-white cursor-pointer">
            FOLLOW
          </button>
        </div>
      </div>
      <div className="absolute right-0 sm:right-[40px] bottom-0 w-[230px] h-[180px] sm:w-[350px] sm:h-[280px]">
        <Image src={"/banner/Artist.png"} fill alt="artist" className="" />
      </div>
    </div>
  );
}

export default Banner;
