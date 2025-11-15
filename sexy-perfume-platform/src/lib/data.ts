export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Obsidian Elixir',
    description: 'A dark and mysterious fragrance with notes of black orchid and spice.',
    price: 120.00,
    imageUrl: '/hero-image.jpg',
  },
  {
    id: 2,
    name: 'Golden Ember',
    description: 'A warm and inviting scent with hints of amber and vanilla.',
    price: 110.00,
    imageUrl: '/hero-image.jpg',
  },
  {
    id: 3,
    name: 'Crimson Night',
    description: 'A bold and passionate aroma with notes of red rose and leather.',
    price: 130.00,
    imageUrl: '/hero-image.jpg',
  },
];
