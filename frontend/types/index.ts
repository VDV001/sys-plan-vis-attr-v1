export type Attraction = {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  rating: number;
  photoUrl: string;
  location: string;
  latitude: number;
  longitude: number;
  status: 'planned' | 'visited';
};
