"use client";

import { SearchX } from "lucide-react";
import { CityCard } from "@/components/home/CityCard";
import { searchCities } from "@/data/mock-data";

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const results = searchCities(query);

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <SearchX className="mb-4 h-16 w-16 text-muted-foreground" />
        <h2 className="mb-2 text-xl font-semibold">검색 결과가 없습니다</h2>
        <p className="text-muted-foreground">
          &quot;{query}&quot;에 대한 검색 결과를 찾을 수 없습니다.
          <br />
          다른 키워드로 검색해 보세요.
        </p>
      </div>
    );
  }

  return (
    <div>
      <p className="mb-6 text-muted-foreground">
        {query ? (
          <>
            &quot;{query}&quot; 검색 결과: <strong>{results.length}</strong>개
            도시
          </>
        ) : (
          <>
            전체 도시: <strong>{results.length}</strong>개
          </>
        )}
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
    </div>
  );
}
