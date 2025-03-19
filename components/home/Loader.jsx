import Image from "next/image";

function Loader() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Image
        src={"/spinner.png"}
        width={35}
        height={35}
        alt="spinner"
        className="animate-spin"
      />
    </div>
  );
}

export default Loader;
