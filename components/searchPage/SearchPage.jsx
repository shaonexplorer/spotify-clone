"use client";

import LoadingPage from "@/components/home/LoadingPage";
import TopNavigation from "@/components/home/TopNavigation";
import LoaderPopularSong from "@/components/loader/LoaderPopularSong";

import SongCardPopular from "@/components/songCard/SongCardPopular";
import { getSongsBySearch } from "@/lib/actions/songs";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SearchPage() {
  const searchParams = useSearchParams();

  const [songList, setSongList] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const query = searchParams.get("q");
        const data = await getSongsBySearch(query);

        setSongList(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <Suspense fallback={<LoadingPage />}>
      <main className="sm:w-[872px] 2xl:w-full h-full mx-auto p-[32px] bg-[#121212] flex flex-col text-white">
        <section className="w-full h-full flex flex-col gap-[24px]  ">
          <TopNavigation currentPage={"search"} />
          <div className="w-full flex items-center justify-between">
            <h1 className="font-bold text-[20px] text-white capitalize">
              search results
            </h1>
            <p className="font-semibold text-[16px] text-[#1DB954] capitalize">
              showing {songList?.length} results
            </p>
          </div>

          <div className="w-full flex flex-col flex-wrap gap-[10px]">
            {isLoading
              ? [1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
                  <LoaderPopularSong key={index} />
                ))
              : songList &&
                songList.map((song, i) => (
                  <SongCardPopular key={i} song={song} index={i} />
                ))}
          </div>
        </section>
      </main>
    </Suspense>
  );
}

export default SearchPage;
