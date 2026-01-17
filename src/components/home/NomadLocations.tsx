import Link from "next/link";
import { MapPin, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { nomadLocations } from "@/data/mock-data";

export function NomadLocations() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">현재 노마드 위치</h2>
        <Button variant="ghost" className="gap-1" asChild>
          <Link href="/map">
            지도로 보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {nomadLocations.map((location) => (
          <Card
            key={location.city}
            className="transition-all hover:shadow-md"
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-base">
                <MapPin className="h-4 w-4 text-primary" />
                {location.city}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {location.avatars.slice(0, 4).map((_, index) => (
                    <Avatar
                      key={index}
                      className="h-8 w-8 border-2 border-background"
                    >
                      <AvatarFallback className="text-xs bg-primary/10">
                        {String.fromCharCode(65 + index)}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {location.count > 4 && (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-medium">
                      +{location.count - 4}
                    </div>
                  )}
                </div>
                <span className="text-sm text-muted-foreground">
                  {location.count}명 체류중
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
