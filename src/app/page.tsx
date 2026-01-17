import { HeroSection } from "@/components/home/HeroSection";
import { QuickFilterTabs } from "@/components/home/QuickFilterTabs";
import { FilterSortBar } from "@/components/home/FilterSortBar";
import { CityCardGrid } from "@/components/home/CityCardGrid";
import { NomadLocations } from "@/components/home/NomadLocations";
import { RecentReviews } from "@/components/home/RecentReviews";
import { UpcomingMeetups } from "@/components/home/UpcomingMeetups";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div className="container mx-auto px-4 py-8">
        <section className="space-y-6">
          <QuickFilterTabs />
          <FilterSortBar />
          <CityCardGrid />
        </section>

        <Separator className="my-12" />

        <NomadLocations />

        <Separator className="my-12" />

        <RecentReviews />

        <Separator className="my-12" />

        <UpcomingMeetups />
      </div>
    </>
  );
}
