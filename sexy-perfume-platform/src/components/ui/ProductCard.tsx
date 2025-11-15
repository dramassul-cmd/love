import Image from 'next/image';

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export function ProductCard({ name, description, price, imageUrl }: ProductCardProps) {
  return (
    <div className="border border-gray-800 rounded-lg p-4 transition-transform transform hover:scale-105 hover:border-accent-gold">
      <div className="relative w-full h-64 mb-4">
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h2 className="text-xl font-serif font-bold text-accent-gold">{name}</h2>
      <p className="mt-2 text-gray-400">{description}</p>
      <p className="mt-4 text-lg font-bold">{`$${price.toFixed(2)}`}</p>
      <button className="mt-4 w-full bg-accent-gold text-primary-black font-bold py-2 px-4 rounded-full hover:bg-yellow-600 transition-colors">
        Add to Cart
      </button>
    </div>
  );
}
