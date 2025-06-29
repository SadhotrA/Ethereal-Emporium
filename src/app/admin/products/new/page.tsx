import { ProductForm } from "@/components/admin/ProductForm";

export default function NewProductPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-headline font-bold">Add New Product</h1>
        <p className="text-muted-foreground">Fill in the details to create a new product.</p>
      </div>
      <ProductForm />
    </div>
  );
}
