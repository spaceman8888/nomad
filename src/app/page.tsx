import { HeroSection } from "@/components/home/HeroSection";
import { QuickFilterTabs } from "@/components/home/QuickFilterTabs";
import { FilterSortBar } from "@/components/home/FilterSortBar";
import { CityCardGrid } from "@/components/home/CityCardGrid";

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
      </div>
    </>
  );
}
