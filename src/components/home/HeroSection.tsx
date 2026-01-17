"use client";

import { Search, MapPin, MessageSquare, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { stats } from "@/data/mock-data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-background py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-5" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            대한민국에서
            <br />
            <span className="text-primary">노마드</span>하기
          </h1>
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            디지털 노마드를 위한 대한민국 도시 정보를 한눈에 확인하세요
          </p>

          <div className="relative mx-auto mb-8 max-w-xl">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="도시, 지역 또는 키워드로 검색..."
              className="h-14 rounded-full border-2 pl-12 pr-4 text-lg shadow-lg focus:border-primary"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <MapPin className="h-4 w-4" />
              <span>
                <strong>{stats.cities}</strong>개 도시
              </span>
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <MessageSquare className="h-4 w-4" />
              <span>
                <strong>{stats.reviews.toLocaleString()}</strong>개 리뷰
              </span>
            </Badge>
            <Badge
              variant="secondary"
              className="flex items-center gap-2 px-4 py-2 text-sm"
            >
              <Users className="h-4 w-4" />
              <span>
                <strong>{stats.nomads}</strong>명 노마드
              </span>
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
