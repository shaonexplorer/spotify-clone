import PopularSongs from "./popularSong/PopularSongs";
import Banner from "./bannerArtist/Banner";
import PopularReleases from "./popularReleases/PopularReleases";
import TopNavigation from "./TopNavigation";
import MusicPlayer from "../musicPlayer/MusicPlayer";

function HomePage() {
  return (
    <div className="  w-full h-full sm:p-[10px] bg-[#121212] flex flex-col">
      <TopNavigation currentPage={"popular artist"} />
      <Banner />
      <PopularReleases />
      <PopularSongs />
    </div>
  );
}

export default HomePage;
