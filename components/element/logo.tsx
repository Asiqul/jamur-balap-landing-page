import Image from 'next/image';
import { Bree_Serif } from 'next/font/google';
import Link from 'next/link';

const breeSerif = Bree_Serif({
  subsets: ['latin'],
  weight: ['400'],
});

export const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/icons/logo.webp"
        alt="logo"
        width={50}
        height={50}
        className="rounded-full w-8 h-8 sm:w-12 sm:h-12"
      />
      <span
        className={`${breeSerif.className} text-xl sm:text-2xl text-primary`}
      >
        JamurBalap
      </span>
    </Link>
  );
};
