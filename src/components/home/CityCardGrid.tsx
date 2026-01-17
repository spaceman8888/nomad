import { Button } from "@/components/ui/button";
import { CityCard } from "./CityCard";
import { cities } from "@/data/mock-data";

export function CityCardGrid() {
  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cities.map((city) => (
          <CityCard key={city.id} city={city} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          더 많은 도시 보기
        </Button>
      </div>
    </div>
  );
}
