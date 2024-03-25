import Image from 'next/image';

type farmProfileType = {
  id: number;
  title: string;
  image: string;
  desc: string;
};
interface farmProfileProps {
  signika: string;
  catamaran: string;
  farmProfile: farmProfileType;
}

const FarmContent: React.FC<farmProfileProps> = (props) => {
  const { signika, catamaran, farmProfile } = props;
  return (
    <div className="w-full">
      <Image
        src={farmProfile.image}
        alt={farmProfile.title}
        width={300}
        height={300}
        className="w-full xs:max-h-36 md:max-h-48 lg:max-h-60 object-cover"
      />
      <div className="py-4 px-2">
        <h3
          className={`${signika} text-lg text-center font-semibold py-3 md:text-xl`}
        >
          {farmProfile.title}
        </h3>
        <p className={`${catamaran} text-center`}>
          {farmProfile.desc}
        </p>
      </div>
    </div>
  );
};

export default FarmContent;
