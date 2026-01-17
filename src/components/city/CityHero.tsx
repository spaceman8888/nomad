import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { type City } from "@/data/mock-data";

interface CityHeroProps {
  city: City;
}

export function CityHero({ city }: CityHeroProps) {
  return (
    <div>
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        목록으로 돌아가기
      </Link>

      <div className="relative aspect-[21/9] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5">
        <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-primary/20 md:text-8xl">
          {city.name}
        </div>

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <Badge className="bg-primary text-primary-foreground text-sm px-3 py-1">
            #{city.rank}
          </Badge>
          {city.isHot && (
            <Badge variant="destructive" className="flex items-center gap-1 text-sm px-3 py-1">
              <TrendingUp className="h-4 w-4" />
              HOT
            </Badge>
          )}
        </div>
      </div>

      <div className="mt-6">
        <h1 className="text-3xl font-bold md:text-4xl">{city.name}</h1>
        <p className="mt-1 text-lg text-muted-foreground">{city.region}</p>
      </div>
    </div>
  );
}
