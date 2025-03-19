import Image from "next/image";

function Notification() {
  return (
    <div className="w-[48px] h-[48px] bg-[#212121] flex items-center justify-center rounded-[12px] cursor-pointer">
      <Image
        src={"/search/notification-bing.png"}
        width={20}
        height={20}
        alt="notification"
      />
    </div>
  );
}

export default Notification;
