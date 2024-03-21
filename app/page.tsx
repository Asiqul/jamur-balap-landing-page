import Banner from '@/fragments/banner';
import Hero from '@/fragments/hero';
import Image from 'next/image';
import {
  Signika_Negative,
  Sacramento,
  Catamaran,
} from 'next/font/google';

const signika = Signika_Negative({
  subsets: ['latin'],
  weight: ['400'],
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
});

const catamaran = Catamaran({
  subsets: ['latin'],
  weight: ['200'],
});

const mushroomList = [
  {
    id: 1,
    name: 'Agaric',
    image: '/icons/mushroom_1.png',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae, molestia.',
  },
  {
    id: 2,
    name: 'Champignon',
    image: '/icons/mushroom_2.png',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae.',
  },
  {
    id: 3,
    name: 'Russule',
    image: '/icons/mushroom_3.png',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 4,
    name: 'Chanterelle',
    image: '/icons/mushroom_4.png',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similiq.',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="bg-popover pt-3">
        <Banner />
      </section>
      <section className="bg-popover py-16">
        <Hero
          signika={signika.className}
          sacramento={sacramento.className}
          catamaran={catamaran.className}
        />
      </section>
      <div className="container mx-auto py-12">
        <div className="flex flex-wrap justify-around lg:justify-center lg: gap-6 items-center">
          {mushroomList.map((mushroom) => (
            <div
              key={mushroom.id}
              className="max-w-xs sm:max-w-40 md:max-w-56 lg:max-w-72 h-60 sm:h-80 flex flex-col gap-2 lg:gap-3 py-3 px-2 items-center rounded-xl hover:scale-110 transition-all duration-500 delay-100 border-2 border-popover hover:border-primary cursor-pointer group"
            >
              <Image
                src={mushroom.image}
                width={100}
                height={100}
                alt=""
                className="w-24 h-24 lg:w-28 lg:h-28 p-3 rounded-full bg-popover"
              ></Image>
              <h3
                className={`${signika.className} text-lg lg:text-xl group-hover:text-primary transition-all duration-500 delay-100`}
              >
                {mushroom.name}
              </h3>
              <p className={`${catamaran.className} text-center`}>
                {mushroom.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
