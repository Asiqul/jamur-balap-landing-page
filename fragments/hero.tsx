import HeroProfile from '@/components/element/heroProfile';

type heroProps = {
  signika: string;
  sacramento: string;
  catamaran: string;
};

const Hero = (props: heroProps) => {
  const { signika, sacramento, catamaran } = props;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-center items-center md:py-3 md:gap-6">
        <HeroProfile />
        <div className="md:-mt-12 md:w-1/2">
          <h3
            className={`${signika} text-md sm:text-lg lg:text-xl pt-12 pb-3 text-center md:text-start`}
          >
            Kami Menyediakan Jamur Asli!
          </h3>
          <p
            className={`${catamaran} px-8 md:px-0 sm:px-12 pb-7 sm:text-md lg:text-lg opacity-80 text-center md:text-start leading-6`}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Praesentium similique placeat explicabo recusandae,
            molestias iste, in quos quod adipisci nostrum aspernatur
            facilis harum.
          </p>
          <h4
            className={`${sacramento} text-center md:text-start text-3xl sm:text-4xl text-primary`}
          >
            Gde Bagus W
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Hero;
