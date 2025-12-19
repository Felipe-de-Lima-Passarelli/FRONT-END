//Final Type Accomodation
export type Accommodation = {
  id: string;
  title: string;
  date: string;
  testimonials: Testimonials[];
  hasBadge: boolean;
  host: string;
  slug: string;
  location: Location;
  price: number;
  rating: number;
  photos: Photos[];
};

type Testimonials = {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  customerTime: number;
  createdAt: number;
  stayedAt: number;
};

type Location = {
  description: string;
  city: string;
  state: string;
  country: string;
};

//Final Type Icons
export type Photos = {
  id: string;
  source: string;
  description: string;
  url?: string;
};

export interface fetchDataProps {
  accommodation: Accommodation[];
  icons: Photos[];
}

export async function fetchDatApi(): Promise<fetchDataProps> {
  const url = "https://web.codans.com.br/airbnb";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
