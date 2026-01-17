import { notFound } from "next/navigation";
import { getCityById, getReviewsByCityName, getMeetupsByCityName } from "@/data/mock-data";
import { CityHero } from "@/components/city/CityHero";
import { CityInfo } from "@/components/city/CityInfo";
import { CityReviews } from "@/components/city/CityReviews";

interface CityDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function CityDetailPage({ params }: CityDetailPageProps) {
  const { id } = await params;
  const cityId = parseInt(id, 10);

  if (isNaN(cityId)) {
    notFound();
  }

  const city = getCityById(cityId);

  if (!city) {
    notFound();
  }

  const reviews = getReviewsByCityName(city.name);
  const meetups = getMeetupsByCityName(city.name);

  return (
    <div className="container mx-auto px-4 py-8">
      <CityHero city={city} />
      <div className="mt-8 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <CityReviews reviews={reviews} cityName={city.name} />
        </div>
        <div>
          <CityInfo city={city} meetups={meetups} />
        </div>
      </div>
    </div>
  );
}
