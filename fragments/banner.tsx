'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';
import { Signika_Negative } from 'next/font/google';
import { Button } from '@/components/ui/button';

const signika = Signika_Negative({
  subsets: ['latin'],
  weight: ['700'],
});

const CarouselImages = [
  {
    id: 1,
    src: '/images/carousel_1.webp',
    alt: 'Media jamur',
    text: 'JamurBalap, Budidaya Jamur di Purworejo.',
  },
  {
    id: 2,
    src: '/images/carousel_2.webp',
    alt: 'Kumbung jamur',
    text: 'Kami menawarkan jamur segar dan berkualitas.',
  },
  {
    id: 3,
    src: '/images/carousel_3.webp',
    alt: 'Jamur siap panen',
    text: 'Dibudidayakan dengan Proses Modern.',
  },
  {
    id: 4,
    src: '/images/carousel_4.webp',
    alt: 'Jamur balap',
    text: 'Jamur Kualitas Terbaik dan Bebas Hama.',
  },
  {
    id: 5,
    src: '/images/carousel_5.webp',
    alt: 'Jamur tumbuh',
    text: 'Kapasitas Produksi yang Tinggi.',
  },
];

const Banner = () => {
  return (
    <Carousel
      className="md:container md:mx-auto w-full relative"
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
    >
      <CarouselContent className="w-full h-56 md:h-96">
        {CarouselImages.map((image) => (
          <CarouselItem key={image.src} className="w-full">
            <div className="relative w-full h-full bg-red-950">
              <div
                className={`${signika.className} w-9/12 md:w-1/2 z-10 absolute top-1/2 -translate-y-1/2 left-8`}
              >
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold ">
                  {image.text}
                </h1>
                <Button
                  variant={'outline'}
                  // size={'lg'}
                  className="mt-4 text-md text-white hover:text-primary text-xs"
                >
                  PESAN SEKARANG
                </Button>
              </div>
              <Image
                src={image.src}
                alt={image.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '100%' }}
                className="object-cover opacity-65"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <Image
        src={'/images/mushroom.png'}
        alt="Mushroom"
        width={110}
        height={110}
        className="absolute -bottom-16 right-32 z-10 hidden md:block"
      />
      <Image
        src={'/images/mushroom_2.png'}
        alt="Mushroom"
        width={120}
        height={120}
        className="absolute -bottom-14 right-10 rotate-[-29deg] hidden md:block"
      />
    </Carousel>
  );
};

export default Banner;
