import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products } from "@/lib/placeholder-data";
import ProductCard from "@/components/shared/ProductCard";
import { Search } from "lucide-react";

export default function ShopPage() {
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className="container py-12">
      <div className="text-center">
        <h1 className="text-4xl font-headline font-bold">Our Collection</h1>
        <p className="mt-2 text-muted-foreground">Browse through our exquisite range of products.</p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-6">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium mb-2">Category</h3>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <h3 className="font-medium mb-2">Price Range</h3>
               <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Any Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Price</SelectItem>
                  <SelectItem value="low">Under ₹1000</SelectItem>
                  <SelectItem value="medium">₹1000 - ₹5000</SelectItem>
                  <SelectItem value="high">Over ₹5000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input placeholder="Search by product name..." className="pl-10 h-11 text-base" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </main>
      </div>
    </div>
  );
}
