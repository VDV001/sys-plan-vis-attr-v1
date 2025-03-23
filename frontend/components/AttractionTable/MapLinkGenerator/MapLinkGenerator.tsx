import { Link } from '@gravity-ui/uikit';

export function MapLinkGenerator({ lat, lon }: { lat: number; lon: number }) {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`;
  
  return (
    <Link href={googleMapsUrl} target="_blank">
      View on Map
    </Link>
  );
}
