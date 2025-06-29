export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type Order = {
  id: string;
  userId: string;
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  totalAmount: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  createdAt: Date;
};

export const products: Product[] = [
  {
    id: 'prod_001',
    name: 'Lipstick Matte',
    description: 'A long-lasting matte lipstick that provides a bold, velvety finish. Enriched with vitamin E to keep your lips moisturized.',
    price: 799,
    stock: 100,
    category: 'Cosmetics',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-01-15T09:30:00Z'),
    updatedAt: new Date('2023-10-20T14:00:00Z'),
  },
  {
    id: 'prod_002',
    name: 'Hydrating Foundation',
    description: 'A lightweight, full-coverage foundation that blends seamlessly for a natural, dewy look. Perfect for all skin types.',
    price: 1299,
    stock: 75,
    category: 'Cosmetics',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-02-20T11:00:00Z'),
    updatedAt: new Date('2023-11-01T10:00:00Z'),
  },
  {
    id: 'prod_003',
    name: 'Silk Scarf',
    description: 'A luxurious 100% silk scarf with a vibrant, artistic print. Can be worn in multiple ways to elevate any outfit.',
    price: 2499,
    stock: 50,
    category: 'Accessories',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-03-10T16:45:00Z'),
    updatedAt: new Date('2023-09-25T18:20:00Z'),
  },
  {
    id: 'prod_004',
    name: 'Leather Handbag',
    description: 'A beautifully crafted genuine leather handbag with gold-tone hardware. Spacious and elegant for everyday use.',
    price: 8999,
    stock: 30,
    category: 'Bags',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-04-05T08:00:00Z'),
    updatedAt: new Date('2023-11-10T12:30:00Z'),
  },
  {
    id: 'prod_005',
    name: 'Eyeshadow Palette',
    description: 'A versatile eyeshadow palette with 12 richly pigmented shades in matte, satin, and shimmer finishes.',
    price: 1999,
    stock: 120,
    category: 'Cosmetics',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-05-21T13:15:00Z'),
    updatedAt: new Date('2023-10-15T11:45:00Z'),
  },
  {
    id: 'prod_006',
    name: 'Designer Sunglasses',
    description: 'Chic oversized sunglasses with 100% UV protection. Features a classic tortoise-shell frame.',
    price: 4500,
    stock: 60,
    category: 'Accessories',
    images: ['https://placehold.co/600x600', 'https://placehold.co/600x600'],
    createdAt: new Date('2023-06-12T10:00:00Z'),
    updatedAt: new Date('2023-10-05T09:00:00Z'),
  },
];

export const orders: Order[] = [
  {
    id: 'ord_001',
    userId: 'user123',
    items: [{ productId: 'prod_001', quantity: 2, price: 799 }],
    totalAmount: 1598,
    status: 'Delivered',
    createdAt: new Date('2023-10-25T10:00:00Z'),
  },
  {
    id: 'ord_002',
    userId: 'user456',
    items: [
      { productId: 'prod_003', quantity: 1, price: 2499 },
      { productId: 'prod_002', quantity: 1, price: 1299 },
    ],
    totalAmount: 3798,
    status: 'Shipped',
    createdAt: new Date('2023-11-08T14:30:00Z'),
  },
  {
    id: 'ord_003',
    userId: 'user123',
    items: [{ productId: 'prod_004', quantity: 1, price: 8999 }],
    totalAmount: 8999,
    status: 'Processing',
    createdAt: new Date('2023-11-12T09:15:00Z'),
  },
];
