import { Play } from 'next/font/google';
import { Logo } from '@/components/element/logo';
import { Navigation } from '@/components/element/navigation';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const play = Play({
  subsets: ['latin'],
  weight: ['400'],
});

export const Header = () => {
  return (
    <header className="bg-popover">
      <div className="container mx-auto grid grid-cols-3 gap-2 items-center py-3 lg:flex lg:flex-row lg:justify-between lg:items-center">
        <div className="text-start lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-primary rounded-full px-1.5 py-0"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side={'left'}>
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently
                  delete your account and remove your data from our
                  servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="text-center col-span-1">
          <Logo />
        </div>
        <Navigation className={play.className} />
      </div>
    </header>
  );
};
