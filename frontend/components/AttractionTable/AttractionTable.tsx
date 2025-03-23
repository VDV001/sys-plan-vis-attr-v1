import { Table, Link as GravityLink } from '@gravity-ui/uikit';
import { Attraction } from '@/types';
import { MapLinkGenerator } from '../MapLinkGenerator';

export function AttractionTable({ data }: { data: Attraction[] }) {
  return (
    <Table>
      <Table.Column name="name" header="Name" />
      <Table.Column name="rating" header="Rating" />
      <Table.Column 
        name="status" 
        header="Status" 
        render={item => (
          <span className={item.status === 'visited' ? 'text-green-500' : 'text-yellow-500'}>
            {item.status}
          </span>
        )}
      />
      <Table.Column
        name="location"
        header="Map"
        render={item => (
          <MapLinkGenerator 
            lat={item.latitude} 
            lon={item.longitude} 
          />
        )}
      />
      <Table.Column
        name="actions"
        header="Actions"
        render={item => (
          <GravityLink href={`/admin/attractions/${item.id}`}>
            Edit
          </GravityLink>
        )}
      />
    </Table>
  );
}
