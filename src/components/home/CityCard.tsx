"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, ThumbsUp, ThumbsDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { type City } from "@/data/mock-data";

interface CityCardProps {
  city: City;
}

export function CityCard({ city }: CityCardProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(city.likes);
  const [dislikesCount, setDislikesCount] = useState(city.dislikes);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (liked) {
      setLiked(false);
      setLikesCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikesCount((prev) => prev + 1);
      if (disliked) {
        setDisliked(false);
        setDislikesCount((prev) => prev - 1);
      }
    }
  };

  const handleDislike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (disliked) {
      setDisliked(false);
      setDislikesCount((prev) => prev - 1);
    } else {
      setDisliked(true);
      setDislikesCount((prev) => prev + 1);
      if (liked) {
        setLiked(false);
        setLikesCount((prev) => prev - 1);
      }
    }
  };

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
        </div>

        <CardContent className="p-4">
          <div className="mb-3">
            <h3 className="text-lg font-semibold group-hover:text-primary">
              {city.name}
            </h3>
            <p className="text-sm text-muted-foreground">{city.region}</p>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">예산</span>
              <span className="font-medium">{city.budget}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">환경</span>
              <span className="font-medium">{city.environment}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">최고 계절</span>
              <span className="font-medium">{city.bestSeason}</span>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-3 border-t pt-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition-colors ${
                liked
                  ? "text-blue-500"
                  : "text-muted-foreground hover:text-blue-500"
              }`}
            >
              <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
              <span>{likesCount}</span>
            </button>
            <button
              onClick={handleDislike}
              className={`flex items-center gap-1 text-sm transition-colors ${
                disliked
                  ? "text-red-500"
                  : "text-muted-foreground hover:text-red-500"
              }`}
            >
              <ThumbsDown
                className={`h-4 w-4 ${disliked ? "fill-current" : ""}`}
              />
              <span>{dislikesCount}</span>
            </button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
