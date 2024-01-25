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
        className="rounded-full"
      />
      <span
        className={`${breeSerif.className} text-2xl text-primary`}
      >
        JamurBalap
      </span>
    </Link>
  );
};
