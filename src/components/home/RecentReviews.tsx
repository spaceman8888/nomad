import Link from "next/link";
import { Star, ChevronRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { reviews } from "@/data/mock-data";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function RecentReviews() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">최근 리뷰</h2>
        <Button variant="ghost" className="gap-1" asChild>
          <Link href="/reviews">
            전체 보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <Card key={review.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {review.author.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{review.author.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {review.author.nationality}
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {review.cityName}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-3 flex items-center gap-2">
                <StarRating rating={review.rating} />
                <span className="text-sm text-muted-foreground">
                  {review.createdAt}
                </span>
              </div>
              <p className="line-clamp-3 text-sm text-muted-foreground">
                {review.content}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
