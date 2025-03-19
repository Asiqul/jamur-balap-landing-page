import SectionHead from "@/components/element/sectionHead";
import { Button } from "@/components/ui/button";
import FarmContent from "@/components/element/farmContent";

type farmProfileProps = {
  signika: string;
  catamaran: string;
};

const farmProfileList = [
  {
    id: 1,
    title: "Misi Kami",
    image: "/images/carousel_2.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae, molestia.",
  },
  {
    id: 2,
    title: "Perawatan",
    image: "/images/carousel_5.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo recusandae.",
  },
  {
    id: 3,
    title: "Budidaya",
    image: "/images/carousel_1.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.",
  },
  {
    id: 4,
    title: "Penyediaan Alat",
    image: "/images/carousel_1.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.",
  },
  {
    id: 5,
    title: "Media Tanam",
    image: "/images/carousel_1.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.",
  },
  {
    id: 6,
    title: "Konsultasi Teknis",
    image: "/images/carousel_1.webp",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium similique placeat explicabo.",
  },
];

const FarmProfileSection = (props: farmProfileProps) => {
  const { signika, catamaran } = props;
  return (
    <div className="container mx-auto pt-8">
      <SectionHead
        title="Tentang Kami"
        desc="Kebun kami sebagai wujud komitmen terhadap kualitas."
        signika={signika}
        catamaran={catamaran}
      />
      <div className="gap-8 grid xs:grid-cols-2 xs:gap-3 sm:gap-6 lg:gap-10 py-10">
        {farmProfileList.map((farmProfile) => (
          <FarmContent
            key={farmProfile.id}
            signika={signika}
            catamaran={catamaran}
            farmProfile={farmProfile}
          />
        ))}
      </div>
    </div>
  );
};

export default FarmProfileSection;
