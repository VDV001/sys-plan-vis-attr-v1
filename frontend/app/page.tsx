import { AttractionTable } from '@/components/AttractionTable';
import { getAttractions } from '@/lib/api/attractions';

export default async function HomePage() {
  const attractions = await getAttractions();

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-6">Travel Planner</h1>
      <div className="mb-6">
        <span className="text-lg">
          Total attractions: {attractions.length}
        </span>
      </div>
      <AttractionTable data={attractions} />
    </div>
  );
}
