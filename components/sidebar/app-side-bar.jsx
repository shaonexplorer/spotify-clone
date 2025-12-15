"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import { navItem, navItem01, navItem02 } from "@/const";
import { Music, Music2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export function AppSidebar() {
  const searchParmas = useSearchParams();
  const params = new URLSearchParams(searchParmas);
  const router = useRouter();
  return (
    <Sidebar collapsible="icon" className={" "}>
      <SidebarHeader className={"bg-[#212121]  "}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href={"/"}>
                {/* <item.image /> */}
                <div className="text-lime-500 flex items-center justify-center w-[25px] h-[25px]">
                  <Music className="" strokeWidth={3} />
                </div>

                <span className="text-[#949494] font-manRope font-semibold text-[20px] capitalize">
                  BeatBay
                </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className={" bg-[#212121]  "}>
        {/* <Link href={"/"}>
              <Image
                src={"/sidebar/Logo.png"}
                width={123}
                height={48}
                alt="logo"
                className="ml-[32px] mt-[20px]"
              />
            </Link> */}

        <SidebarGroup>
          {/* <SidebarGroupLabel className={"text-muted-foreground"}>
                Application
              </SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {navItem.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      {/* <item.image /> */}
                      <Image
                        src={item.image}
                        width={24}
                        height={24}
                        alt="icon"
                      />
                      <span className="text-[#949494] font-medium text-[16px] capitalize">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <div className="w-full flex flex-col ">
          {/* {navItem.map((item, index) => (
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
              ))} */}

          {/* <h1 className="capitalize text-[12px] font-bold text-[#949494] ml-[32px] mt-[35px] mb-[20px]">
                library
              </h1> */}

          <SidebarGroup>
            <SidebarGroupLabel className={" text-[#949494]"}>
              Library
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItem01.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        {/* <item.image /> */}
                        <Image
                          src={item.image}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                        <span className="text-[#949494] font-medium text-[16px] capitalize">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* {navItem01.map((item, index) => (
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
              ))} */}

          {/* <h1 className="capitalize text-[12px] font-bold text-[#949494] ml-[32px] mt-[35px] mb-[20px]">
                playlist
              </h1> */}

          <SidebarGroup>
            <SidebarGroupLabel className={" text-[#949494]"}>
              PlayList
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItem02.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        {/* <item.image /> */}
                        <Image
                          src={item.image}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                        <span className="text-[#949494] font-medium text-[16px] capitalize">
                          {item.title}
                        </span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* {navItem02.map((item, index) => (
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
              ))} */}
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
