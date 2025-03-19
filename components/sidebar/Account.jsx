import Image from "next/image";

function Account() {
  return (
    <div className="w-[234px] h-[48px] flex items-center gap-[8px]">
      <div className="w-[48px] h-[48px] rounded-full bg-black pt-[5px] overflow-hidden flex items-center justify-center">
        <Image
          src={"/sidebar/avatar.png"}
          width={40}
          height={40}
          alt="avatar"
          className=" "
        />
      </div>

      <div className="flex flex-col gap-[4px]">
        <h1 className="text-white text-[16px] font-semibold capitalize">
          James Rodriguez
        </h1>
        <span className="flex items-center gap-[16px]">
          <p className="text-[12px] text-[#7F7F7F]">Premium</p>
          <Image
            src={"/sidebar/premium.png"}
            width={16}
            height={16}
            alt="premium"
          />
        </span>
      </div>
      <Image
        src={"/sidebar/arrow_down.png"}
        width={16}
        height={16}
        alt="arrow"
        className="cursor-pointer ml-auto"
      />
    </div>
  );
}

export default Account;
