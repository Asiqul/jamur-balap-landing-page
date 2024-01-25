import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';

export const Navigation = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex flex-row items-center gap-4`}>
      <Link href="/">BERANDA</Link>

      <DropdownMenu>
        <DropdownMenuTrigger>TENTANG KAMI</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" sideOffset={25}>
          <DropdownMenuSeparator />
          <DropdownMenuItem>LOKASI KAMI</DropdownMenuItem>
          <DropdownMenuItem>GALERI</DropdownMenuItem>
          <DropdownMenuItem>BLABLA</DropdownMenuItem>
          <DropdownMenuItem>BLABLA</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="/">PRODUK KAMI</Link>

      <Link href="/">MANFAAT KESEHATAN</Link>

      <DropdownMenu>
        <DropdownMenuTrigger>HUBUNGI KAMI</DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" sideOffset={25}>
          <DropdownMenuSeparator />
          <DropdownMenuItem>LOKASI KAMI</DropdownMenuItem>
          <DropdownMenuItem>GALERI</DropdownMenuItem>
          <DropdownMenuItem>BLABLA</DropdownMenuItem>
          <DropdownMenuItem>BLABLA</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
