"use client";

import { MapPin, Wallet, TreePine, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const regions = [
  { value: "all", label: "전체" },
  { value: "수도권", label: "수도권" },
  { value: "경상도", label: "경상도" },
  { value: "전라도", label: "전라도" },
  { value: "강원도", label: "강원도" },
  { value: "제주도", label: "제주도" },
  { value: "충청도", label: "충청도" },
];

const budgets = [
  { value: "all", label: "전체" },
  { value: "100만원 이하", label: "100만원 이하" },
  { value: "100~200만원", label: "100~200만원" },
  { value: "200만원 이상", label: "200만원 이상" },
];

const environments = [
  { value: "all", label: "전체" },
  { value: "자연친화", label: "자연친화" },
  { value: "도심선호", label: "도심선호" },
  { value: "카페작업", label: "카페작업" },
  { value: "코워킹 필수", label: "코워킹 필수" },
];

const seasons = [
  { value: "all", label: "전체" },
  { value: "봄", label: "봄" },
  { value: "여름", label: "여름" },
  { value: "가을", label: "가을" },
  { value: "겨울", label: "겨울" },
];

export function FilterSortBar() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select defaultValue="all">
        <SelectTrigger className="w-[120px]">
          <MapPin className="mr-2 h-4 w-4" />
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
        <SelectTrigger className="w-[140px]">
          <Wallet className="mr-2 h-4 w-4" />
          <SelectValue placeholder="예산" />
        </SelectTrigger>
        <SelectContent>
          {budgets.map((budget) => (
            <SelectItem key={budget.value} value={budget.value}>
              {budget.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[130px]">
          <TreePine className="mr-2 h-4 w-4" />
          <SelectValue placeholder="환경" />
        </SelectTrigger>
        <SelectContent>
          {environments.map((env) => (
            <SelectItem key={env.value} value={env.value}>
              {env.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[100px]">
          <Calendar className="mr-2 h-4 w-4" />
          <SelectValue placeholder="계절" />
        </SelectTrigger>
        <SelectContent>
          {seasons.map((season) => (
            <SelectItem key={season.value} value={season.value}>
              {season.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
