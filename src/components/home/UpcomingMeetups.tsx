import Link from "next/link";
import { Calendar, Clock, MapPin, Users, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { meetups } from "@/data/mock-data";

export function UpcomingMeetups() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">다가오는 밋업</h2>
        <Button variant="ghost" className="gap-1" asChild>
          <Link href="/meetups">
            전체 보기
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {meetups.map((meetup) => (
          <Card key={meetup.id} className="transition-all hover:shadow-md">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-base">{meetup.title}</CardTitle>
                <Badge variant="secondary">{meetup.city}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{meetup.date}</span>
                <Clock className="ml-2 h-4 w-4" />
                <span>{meetup.time}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{meetup.location}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span>
                    {meetup.participants}/{meetup.maxParticipants}명 참가
                  </span>
                </div>
                <Button size="sm">참가하기</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
