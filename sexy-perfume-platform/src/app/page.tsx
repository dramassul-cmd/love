import { HeroSection } from "@/components/ui/HeroSection";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="container mx-auto py-20">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-accent-gold">
          Our Collection
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </section>
    </>
  );
}
