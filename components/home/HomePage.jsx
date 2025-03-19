import PopularSongs from "./popularSong/PopularSongs";
import Banner from "./bannerArtist/Banner";
import PopularReleases from "./popularReleases/PopularReleases";
import TopNavigation from "./TopNavigation";

function HomePage() {
  return (
    <div className="sm:w-[872px] 2xl:min-w-full h-full p-[32px] bg-[#121212] flex flex-col">
      <TopNavigation currentPage={"popular artist"} />
      <Banner />
      <PopularReleases />
      <PopularSongs />
    </div>
  );
}

export default HomePage;
