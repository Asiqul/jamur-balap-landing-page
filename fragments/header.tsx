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
import Image from 'next/image';

const play = Play({
  subsets: ['latin'],
  weight: ['400'],
});

export const Header = () => {
  return (
    <header className="bg-popover border-b-2">
      <div className="container mx-auto py-4 flex flex-row justify-between items-center">
        <div className="text-start lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="text-primary rounded-xl px-1.5 py-0"
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

        <div className="mr-2">
          <Navigation className={play.className} />
          <Image
            src={'/icons/whatsapp.svg'}
            width={38}
            height={38}
            alt="whatsapp me"
            className="text-primary font-bold ml-1.5 cursor-pointer hover:bg-accent rounded-xl p-1.5 lg:hidden"
          ></Image>
        </div>
      </div>
    </header>
  );
};
