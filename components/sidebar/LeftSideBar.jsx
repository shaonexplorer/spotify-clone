"use client";

import { navItem, navItem01, navItem02 } from "@/const";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

function LeftSideBar() {
  const searchParmas = useSearchParams();
  const params = new URLSearchParams(searchParmas);
  const router = useRouter();
  return (
    <div className="hidden sm:flex sm:min-w-[270px] min-h-screen bg-[#212121]">
      <section className="fixed h-screen text-white flex flex-col gap-[40px]">
        <Link href={"/"}>
          <Image
            src={"/sidebar/Logo.png"}
            width={123}
            height={48}
            alt="logo"
            className="ml-[32px] mt-[20px]"
          />
        </Link>

        <div className="w-full flex flex-col ">
          {navItem.map((item, index) => (
            <div
              onClick={() => {
                params.delete("q");
                params.set("active-tab", item.title);
                router.replace(`/?${params.toString()}`);
              }}
              key={index}
              className={`w-[270px] cursor-pointer h-[48px] flex items-center gap-[16px] pl-[32px] hoverEffect ${
                searchParmas.get("active-tab")?.toString() == item.title
                  ? "grad"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                width={24}
                height={24}
                alt="icon"
                className=""
              />
              <p className="text-[#949494] font-medium text-[16px] capitalize">
                {item.title}
              </p>

              {searchParmas.get("active-tab")?.toString() == item.title && (
                <span className="bg-[#1DB954] w-[6px] h-full ml-auto"></span>
              )}
            </div>
          ))}

          <h1 className="capitalize text-[12px] font-bold text-[#949494] ml-[32px] mt-[35px] mb-[20px]">
            library
          </h1>

          {navItem01.map((item, index) => (
            <div
              onClick={() => {
                params.delete("q");
                params.set("active-tab", item.title);
                router.replace(`/?${params.toString()}`);
              }}
              key={index}
              className={`w-[270px] cursor-pointer h-[48px] flex items-center gap-[16px] pl-[32px] hoverEffect ${
                searchParmas.get("active-tab")?.toString() == item.title
                  ? "grad"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                width={24}
                height={24}
                alt="icon"
                className=""
              />
              <p className="text-[#949494] font-medium text-[16px] capitalize">
                {item.title}
              </p>

              {searchParmas.get("active-tab")?.toString() == item.title && (
                <span className="bg-[#1DB954] w-[6px] h-full ml-auto"></span>
              )}
            </div>
          ))}

          <h1 className="capitalize text-[12px] font-bold text-[#949494] ml-[32px] mt-[35px] mb-[20px]">
            playlist
          </h1>

          {navItem02.map((item, index) => (
            <div
              onClick={() => {
                params.delete("q");
                params.set("active-tab", item.title);
                router.replace(`/?${params.toString()}`);
              }}
              key={index}
              className={`w-[270px] cursor-pointer h-[48px] flex items-center gap-[16px] pl-[32px] hoverEffect ${
                searchParmas.get("active-tab")?.toString() == item.title
                  ? "grad"
                  : ""
              }`}
            >
              <Image
                src={item.image}
                width={24}
                height={24}
                alt="icon"
                className=""
              />
              <p className="text-[#949494] font-medium text-[16px] capitalize">
                {item.title}
              </p>

              {searchParmas.get("active-tab")?.toString() == item.title && (
                <span className="bg-[#1DB954] w-[6px] h-full ml-auto"></span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default LeftSideBar;
