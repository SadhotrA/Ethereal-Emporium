import { ProductForm } from "@/components/admin/ProductForm";
import { products } from "@/lib/placeholder-data";
import { notFound } from "next/navigation";

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold">Edit Product</h1>
        <p className="text-muted-foreground">Update the details for "{product.name}".</p>
      </div>
      <ProductForm product={product} />
    </div>
  );
}
