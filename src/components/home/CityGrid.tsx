import { CityCard } from "./CityCard";
import { getSortedCities } from "@/data/cities";

// Get sorted cities
const sortedCities = getSortedCities();

export function CityGrid() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold mb-6">도시 리스트</h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCities.map((city) => (
            <CityCard key={city.id} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
}
