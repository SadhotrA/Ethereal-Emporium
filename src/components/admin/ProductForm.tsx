'use client';

import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { generateDescriptionAction } from '@/app/actions';
import { Wand2, LoaderCircle, Check, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/lib/placeholder-data';
import { useRouter } from 'next/navigation';

const productSchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters.'),
  description: z.string().min(10, 'Description must be at least 10 characters.'),
  price: z.coerce.number().positive('Price must be a positive number.'),
  stock: z.coerce.number().int().min(0, 'Stock cannot be negative.'),
  category: z.string().min(2, 'Category is required.'),
});

type ProductFormValues = z.infer<typeof productSchema>;

export function ProductForm({ product }: { product?: Product }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: product || {
      name: '',
      description: '',
      price: 0,
      stock: 0,
      category: '',
    },
  });

  const { name, category, description } = useWatch({ control: form.control });

  const handleGenerateDescription = async () => {
    if (!name || !category || !description) {
      toast({
        title: 'Missing Information',
        description: 'Please fill in Name, Category, and a base Description before generating.',
        variant: 'destructive'
      });
      return;
    }
    setIsGenerating(true);
    setGeneratedDescription(null);
    const result = await generateDescriptionAction({ name, description, category });
    if (result.success) {
      setGeneratedDescription(result.description);
    } else {
      toast({ title: 'Error', description: result.error, variant: 'destructive' });
    }
    setIsGenerating(false);
  };

  const useGeneratedDescription = () => {
    if (generatedDescription) {
      form.setValue('description', generatedDescription, { shouldValidate: true });
      toast({ title: 'Success', description: 'AI-generated description has been applied.' });
    }
  };

  const copyToClipboard = () => {
    if(generatedDescription) {
        navigator.clipboard.writeText(generatedDescription);
        toast({ title: 'Copied!', description: 'Description copied to clipboard.' });
    }
  }

  function onSubmit(data: ProductFormValues) {
    console.log(data);
    toast({
      title: product ? "Product Updated!" : "Product Created!",
      description: `The product "${data.name}" has been saved.`,
    });
    router.push('/admin/products');
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
                <CardDescription>Enter the main details for your product.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl><Input placeholder="e.g. 'Lipstick Matte'" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl><Textarea placeholder="Describe the product..." {...field} rows={5} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>AI Description Generator</CardTitle>
                    <CardDescription>Enhance your product description with AI.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <Button type="button" onClick={handleGenerateDescription} disabled={isGenerating}>
                        {isGenerating ? <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
                        {isGenerating ? 'Generating...' : 'Generate with AI'}
                    </Button>
                    {generatedDescription && (
                        <div className="space-y-2 rounded-md border border-accent bg-accent/30 p-4">
                            <p className="font-semibold text-accent-foreground">✨ AI Generated Suggestion</p>
                            <p className="text-sm text-foreground/80">{generatedDescription}</p>
                            <div className="flex gap-2 pt-2">
                                <Button type="button" size="sm" onClick={useGeneratedDescription}><Check className="mr-2 h-4 w-4" /> Use this</Button>
                                <Button type="button" size="sm" variant="outline" onClick={copyToClipboard}><Copy className="mr-2 h-4 w-4" /> Copy</Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Organization</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Category</FormLabel>
                      <FormControl><Input placeholder="e.g. 'Cosmetics'" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Pricing & Inventory</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Price (₹)</FormLabel>
                      <FormControl><Input type="number" placeholder="799" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="stock"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Stock</FormLabel>
                      <FormControl><Input type="number" placeholder="100" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>
             <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                </CardHeader>
                <CardContent>
                  <Input type="file" multiple />
                  <p className="text-xs text-muted-foreground mt-2">Upload one or more images for your product.</p>
                </CardContent>
              </Card>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={() => router.push('/admin/products')}>Cancel</Button>
          <Button type="submit">Save Product</Button>
        </div>
      </form>
    </Form>
  );
}
