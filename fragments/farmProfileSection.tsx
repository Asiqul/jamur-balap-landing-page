import SectionHead from '@/components/element/sectionHead';
import { Button } from '@/components/ui/button';
import FarmContent from '@/components/element/farmContent';

type farmProfileProps = {
  signika: string;
  catamaran: string;
};

const farmProfileList = [
  {
    id: 1,
    title: 'Misi Kami',
    image: '/images/carousel_2.webp',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae, molestia.',
  },
  {
    id: 2,
    title: 'Perawatan',
    image: '/images/carousel_5.webp',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae.',
  },
  {
    id: 3,
    title: 'Budidaya',
    image: '/images/carousel_1.webp',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
];

const FarmProfileSection = (props: farmProfileProps) => {
  const { signika, catamaran } = props;
  return (
    <div className="container mx-auto py-8">
      <SectionHead
        title="Tentang Kami"
        desc="Kebun kami sebagai wujud komitmen terhadap kualitas."
        signika={signika}
        catamaran={catamaran}
      />
      <div className="gap-8 grid xs:grid-cols-3 xs:gap-3 sm:gap-6 lg:gap-10 py-10">
        {farmProfileList.map((farmProfile) => (
          <FarmContent
            key={farmProfile.id}
            signika={signika}
            catamaran={catamaran}
            farmProfile={farmProfile}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button
          variant="default"
          className={`w-1/2 xs:w-44 font-semibold ${signika}`}
        >
          SELENGKAPNYA
        </Button>
      </div>
    </div>
  );
};

export default FarmProfileSection;
