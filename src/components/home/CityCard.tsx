import Link from "next/link";
import {
  Sun,
  Cloud,
  CloudSun,
  Wifi,
  ThumbsUp,
  Users,
  Wind,
  TrendingUp,
} from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type City, formatCurrencyShort } from "@/data/mock-data";

interface CityCardProps {
  city: City;
}

function getWeatherIcon(icon: string) {
  switch (icon) {
    case "sun":
      return <Sun className="h-4 w-4 text-yellow-500" />;
    case "cloud":
      return <Cloud className="h-4 w-4 text-gray-400" />;
    case "cloud-sun":
      return <CloudSun className="h-4 w-4 text-yellow-400" />;
    default:
      return <Sun className="h-4 w-4 text-yellow-500" />;
  }
}

function getAqiColor(aqi: number) {
  if (aqi <= 50) return "text-green-500";
  if (aqi <= 100) return "text-yellow-500";
  if (aqi <= 150) return "text-orange-500";
  return "text-red-500";
}

export function CityCard({ city }: CityCardProps) {
  return (
    <Link href={`/cities/${city.id}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg">
        <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
          <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-primary/20">
            {city.name}
          </div>

          <div className="absolute left-3 top-3 flex items-center gap-2">
            <Badge className="bg-primary text-primary-foreground">
              #{city.rank}
            </Badge>
            {city.isHot && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                HOT
              </Badge>
            )}
          </div>

          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-black/50 px-2 py-1 text-xs text-white">
            <Users className="h-3 w-3" />
            <span>{city.currentNomads}명 체류중</span>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="mb-3">
            <h3 className="text-lg font-semibold group-hover:text-primary">
              {city.name}
            </h3>
            <p className="text-sm text-muted-foreground">{city.region}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xs font-bold text-primary">
                  {city.nomadScore}
                </span>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">노마드 점수</p>
              </div>
            </div>

            <div>
              <p className="font-medium">
                {formatCurrencyShort(city.monthlyCost)}
              </p>
              <p className="text-xs text-muted-foreground">월 생활비</p>
            </div>

            <div className="flex items-center gap-1">
              <Wifi className="h-4 w-4 text-blue-500" />
              <span className="font-medium">{city.internetSpeed}</span>
              <span className="text-xs text-muted-foreground">Mbps</span>
            </div>

            <div className="flex items-center gap-1">
              <ThumbsUp className="h-4 w-4 text-green-500" />
              <span className="font-medium">{city.recommendRate}%</span>
              <span className="text-xs text-muted-foreground">추천</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="border-t bg-muted/30 px-4 py-3">
          <div className="flex w-full items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              {getWeatherIcon(city.weather.icon)}
              <span>{city.weather.temp}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className={`h-4 w-4 ${getAqiColor(city.aqi)}`} />
              <span className={getAqiColor(city.aqi)}>AQI {city.aqi}</span>
            </div>
            <Badge variant="outline" className="text-xs">
              안전 {city.safetyGrade}
            </Badge>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
