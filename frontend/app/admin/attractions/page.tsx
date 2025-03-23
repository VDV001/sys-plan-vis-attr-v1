'use client';
import { useEffect, useState } from 'react';
import { Button, Table, TextInput, Switch } from '@gravity-ui/uikit';
import { Attraction } from '@/types';
import { AttractionTable } from '@/components/AttractionTable';
import { getAttractions } from '@/lib/api/attractions';

export default function AttractionsPage() {
  const [attractions, setAttractions] = useState<Attraction[]>([]);
  const [search, setSearch] = useState('');
  const [showVisited, setShowVisited] = useState(false);

  useEffect(() => {
    getAttractions().then(setAttractions);
  }, []);

  const filtered = attractions.filter(a => 
    a.name.toLowerCase().includes(search.toLowerCase()) &&
    (showVisited ? true : a.status !== 'visited')
  );

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-6">
        <TextInput 
          placeholder="Search attractions..." 
          value={search}
          onUpdate={setSearch}
        />
        <Switch 
          checked={showVisited}
          onUpdate={setShowVisited}
          content="Show visited"
        />
        <Button href="/admin/attractions/new" view="action">
          Add New
        </Button>
      </div>
      
      <AttractionTable data={filtered} />
    </div>
  );
}
