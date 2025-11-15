import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="/hero-image.jpg"
          alt="Sexy perfume model"
          layout="fill"
          objectFit="cover"
          className="opacity-40"
        />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          Unleash Your Inner Scent
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
          Discover the fragrance that defines you.
        </p>
        <button className="bg-accent-gold text-primary-black font-bold py-3 px-8 rounded-full hover:bg-yellow-600 transition-colors transform hover:scale-105">
          Shop Now
        </button>
      </div>
    </section>
  );
}
