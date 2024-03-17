import Image from 'next/image';

const HeroProfile = () => {
  return (
    <div className="w-full md:w-1/3">
      <Image
        src="/images/hero.jpg"
        alt="hero"
        width={500}
        height={500}
        className="rounded-full w-44 h-44 sm:w-52 sm:h-52 object-cover mx-auto"
      />
    </div>
  );
};

export default HeroProfile;
