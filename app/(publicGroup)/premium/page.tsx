import React from "react";
import { PremiumNewsList } from "../_components/news/PremiumNewsList";
import NewsSearchBar from "../_components/news/NewsSearchBar";

const PremiumPage = async({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  
  return (
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Premium News</h1>
          <p className="text-sm text-muted-foreground">
            Exclusive stories for our subscribers.
          </p>
        </div>
        <NewsSearchBar></NewsSearchBar>
      </div>

      <PremiumNewsList searchParams={searchParams}></PremiumNewsList>
    </div>
  );
};

export default PremiumPage;
