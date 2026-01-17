"use client";

import { useState } from "react";
import { Flame, Wallet, Wifi, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = [
  { id: "popular", label: "인기", icon: Flame },
  { id: "affordable", label: "저렴한", icon: Wallet },
  { id: "fast-internet", label: "빠른 인터넷", icon: Wifi },
  { id: "good-weather", label: "좋은 날씨", icon: Sun },
];

interface QuickFilterTabsProps {
  onFilterChange?: (filter: string) => void;
}

export function QuickFilterTabs({ onFilterChange }: QuickFilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState("popular");

  const handleFilterChange = (value: string) => {
    setActiveFilter(value);
    onFilterChange?.(value);
  };

  return (
    <Tabs value={activeFilter} onValueChange={handleFilterChange}>
      <TabsList className="h-auto flex-wrap gap-2 bg-transparent p-0">
        {filters.map((filter) => (
          <TabsTrigger
            key={filter.id}
            value={filter.id}
            className="flex items-center gap-2 rounded-full border bg-background px-4 py-2 data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <filter.icon className="h-4 w-4" />
            <span>{filter.label}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
