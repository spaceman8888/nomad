"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type City, type Meetup } from "@/data/mock-data";

interface CityInfoProps {
  city: City;
  meetups: Meetup[];
}

export function CityInfo({ city, meetups }: CityInfoProps) {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(city.likes);
  const [dislikesCount, setDislikesCount] = useState(city.dislikes);

  const handleLike = () => {
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

  const handleDislike = () => {
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
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>도시 정보</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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

          <div className="border-t pt-4">
            <p className="mb-3 text-sm text-muted-foreground">이 도시가 마음에 드셨나요?</p>
            <div className="flex gap-3">
              <Button
                variant={liked ? "default" : "outline"}
                size="sm"
                onClick={handleLike}
                className="flex items-center gap-2"
              >
                <ThumbsUp className={`h-4 w-4 ${liked ? "fill-current" : ""}`} />
                <span>{likesCount}</span>
              </Button>
              <Button
                variant={disliked ? "destructive" : "outline"}
                size="sm"
                onClick={handleDislike}
                className="flex items-center gap-2"
              >
                <ThumbsDown className={`h-4 w-4 ${disliked ? "fill-current" : ""}`} />
                <span>{dislikesCount}</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {meetups.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>예정된 밋업</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {meetups.map((meetup) => (
              <div key={meetup.id} className="space-y-2 border-b pb-4 last:border-0 last:pb-0">
                <h4 className="font-medium">{meetup.title}</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{meetup.date} {meetup.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{meetup.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{meetup.participants}/{meetup.maxParticipants}명 참여</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
