"use client";

import { useState } from "react";
import { SlidersHorizontal, ArrowUpDown, Map, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const regions = [
  { value: "all", label: "전체 지역" },
  { value: "seoul", label: "수도권" },
  { value: "gyeongsang", label: "경상도" },
  { value: "jeolla", label: "전라도" },
  { value: "chungcheong", label: "충청도" },
  { value: "gangwon", label: "강원도" },
  { value: "jeju", label: "제주도" },
];

const costRanges = [
  { value: "all", label: "전체 생활비" },
  { value: "under-150", label: "150만원 이하" },
  { value: "150-200", label: "150~200만원" },
  { value: "over-200", label: "200만원 이상" },
];

const sortOptions = [
  { value: "rank", label: "순위순" },
  { value: "score", label: "점수순" },
  { value: "cost-low", label: "생활비 낮은순" },
  { value: "cost-high", label: "생활비 높은순" },
  { value: "internet", label: "인터넷 속도순" },
];

export function FilterSortBar() {
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-wrap items-center gap-2">
        <Select defaultValue="all">
          <SelectTrigger className="w-[140px]">
            <SlidersHorizontal className="mr-2 h-4 w-4" />
            <SelectValue placeholder="지역" />
          </SelectTrigger>
          <SelectContent>
            {regions.map((region) => (
              <SelectItem key={region.value} value={region.value}>
                {region.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-[150px]">
            <SelectValue placeholder="생활비" />
          </SelectTrigger>
          <SelectContent>
            {costRanges.map((range) => (
              <SelectItem key={range.value} value={range.value}>
                {range.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select defaultValue="rank">
          <SelectTrigger className="w-[140px]">
            <ArrowUpDown className="mr-2 h-4 w-4" />
            <SelectValue placeholder="정렬" />
          </SelectTrigger>
          <SelectContent>
            {sortOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant={viewMode === "grid" ? "default" : "outline"}
          size="icon"
          onClick={() => setViewMode("grid")}
        >
          <Grid3X3 className="h-4 w-4" />
          <span className="sr-only">그리드 뷰</span>
        </Button>
        <Button
          variant={viewMode === "map" ? "default" : "outline"}
          size="icon"
          onClick={() => setViewMode("map")}
        >
          <Map className="h-4 w-4" />
          <span className="sr-only">지도 뷰</span>
        </Button>
      </div>
    </div>
  );
}
