import { Star, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { type Review } from "@/data/mock-data";

interface CityReviewsProps {
  reviews: Review[];
  cityName: string;
}

export function CityReviews({ reviews, cityName }: CityReviewsProps) {
  if (reviews.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            리뷰
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="py-8 text-center text-muted-foreground">
            <MessageSquare className="mx-auto mb-3 h-12 w-12 opacity-50" />
            <p>아직 {cityName}에 대한 리뷰가 없습니다.</p>
            <p className="text-sm">첫 번째 리뷰를 작성해보세요!</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          리뷰 ({reviews.length})
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0 last:pb-0">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarFallback>{review.author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">{review.author.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.author.nationality}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < review.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed">{review.content}</p>
                <p className="mt-2 text-xs text-muted-foreground">{review.createdAt}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
