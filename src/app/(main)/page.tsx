import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/placeholder-data';
import ProductCard from '@/components/shared/ProductCard';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1920x1080')" }}
          data-ai-hint="luxury background"
        ></div>
        <div className="relative z-20 container px-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Elegance, Redefined
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90">
            Discover our curated collection of luxury cosmetics and accessories, designed to bring out your inner radiance.
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="container">
          <h2 className="text-3xl font-headline font-bold text-center">
            Featured Products
          </h2>
          <p className="mt-2 text-center text-muted-foreground">
            Handpicked selections just for you
          </p>
          <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
