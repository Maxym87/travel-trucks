

type Transmission = 'automatic' | 'manual';
type Engine = 'diesel' | 'petrol' | 'electric';
type Form = 'panel_van' | 'alcove' | 'fully_integrated'; // уточни если есть ещё

type Amenity =
  | 'ac'
  | 'kitchen'
  | 'radio'
  | 'microwave'
  | 'gas'
  | 'water';

export type Camper = {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  description: string;

  form: Form;

  length: string;
  width: string;
  height: string; 
  tank: string;
  consumption: string;

  transmission: Transmission;
  engine: Engine;

  amenities: Amenity[];

  createdAt: string; // ISO дата
  updatedAt: string;

  coverImage: string;

  totalReviews: number;
};

export type CampersResponse = {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
};

export type CampersQueryParams = {
  page?: number;
  perPage?: number;
  form?: Form;
  transmission?: Transmission;
  engine?: Engine;
};