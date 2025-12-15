import LoadingPage from "@/components/home/LoadingPage";
import SearchPage from "@/components/searchPage/SearchPage";
import { Suspense } from "react";

function SearchResultPage() {
  return (
    <div className="flex w-full">
      <Suspense fallback={<LoadingPage />}>
        <SearchPage />
      </Suspense>
    </div>
  );
}

export default SearchResultPage;
