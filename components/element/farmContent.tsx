import Image from "next/image";
import { Button } from "../ui/button";

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
    <div className="w-full flex flex-col justify-between mb-4 sm:min-w-52 border-2 p-2 rounded-lg hover:scale-105 transition-all duration-500 delay-100 hover:border-primary group">
      <Image
        src={farmProfile.image}
        alt={farmProfile.title}
        width={300}
        height={300}
        className="w-full xs:max-h-36 md:max-h-48 lg:max-h-60 object-cover"
      />
      <div className="h-full py-4 px-2 flex flex-col">
        <h3
          className={`${signika} text-lg text-center font-semibold py-3 md:text-xl group-hover:text-primary transition-all duration-500`}
        >
          {farmProfile.title}
        </h3>
        <p className={`${catamaran} text-center`}>{farmProfile.desc}</p>
      </div>
      <div className="flex justify-center">
        <Button
          variant="default"
          className={`w-1/2 xs:w-44 font-semibold ${signika} hover:scale-105 transition-all duration-200 ease-in`}
        >
          SELENGKAPNYA
        </Button>
      </div>
    </div>
  );
};

export default FarmContent;
