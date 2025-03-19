import LoadingPage from "@/components/home/LoadingPage";
import SearchPage from "@/components/searchPage/SearchPage";
import { Suspense } from "react";

function SearchResultPage() {
  return <Suspense fallback={<LoadingPage />}>{/* <SearchPage /> */}</Suspense>;
}

export default SearchResultPage;
