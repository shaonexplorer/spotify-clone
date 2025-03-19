import Image from "next/image";

function LoadingPage() {
  return (
    <div className="text-white w-screen h-screen z-50 fixed inset-0 bg-transparent flex items-center justify-center">
      {/* <Image
        src={"/spinner.png"}
        width={48}
        height={48}
        alt="spinner"
        className="animate-spin"
      /> */}
      <p className="text-white">Loading ...</p>
    </div>
  );
}

export default LoadingPage;
