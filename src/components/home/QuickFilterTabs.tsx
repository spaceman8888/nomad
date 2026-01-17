"use client";

import { useState } from "react";
import { Wallet, MapPin, TreePine, Calendar } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const filters = [
  { id: "budget", label: "예산별", icon: Wallet },
  { id: "region", label: "지역별", icon: MapPin },
  { id: "environment", label: "환경별", icon: TreePine },
  { id: "season", label: "계절별", icon: Calendar },
];

interface QuickFilterTabsProps {
  onFilterChange?: (filter: string) => void;
}

export function QuickFilterTabs({ onFilterChange }: QuickFilterTabsProps) {
  const [activeFilter, setActiveFilter] = useState("budget");

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
