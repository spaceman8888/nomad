"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { Search } from "lucide-react";
import { SearchResults } from "@/components/search/SearchResults";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <Search className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold">검색 결과</h1>
        </div>
      </div>
      <SearchResults query={query} />
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <main className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center py-16">
            <p className="text-muted-foreground">검색 중...</p>
          </div>
        </main>
      }
    >
      <SearchContent />
    </Suspense>
  );
}
