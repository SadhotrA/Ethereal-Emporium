import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Gem } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 text-2xl font-headline text-primary", className)}>
      <Gem className="h-6 w-6" />
      <span className="font-bold">Ethereal Emporium</span>
    </Link>
  );
}
