import SectionHead from '@/components/element/sectionHead';
import Image from 'next/image';

type healthBenefitSectionProps = {
  signika: string;
  catamaran: string;
};

const healthBenefit = [
  {
    id: 1,
    title: 'Meningkatkan Metabolisme Tubuh',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 2,
    title: 'Meningkatkan Kadar Vitamin D',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 3,
    title: 'Meningkatkan Imunitas Tubuh',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 4,
    title: 'Baik untuk Kandung Kemih Anda',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 5,
    title: 'Sebagai Antioksidan',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
  {
    id: 6,
    title: 'Meningkatkan Kesehatan Jantung',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium similique placeat explicabo.',
  },
];

const HealthBenefitSection = (props: healthBenefitSectionProps) => {
  const { signika, catamaran } = props;
  return (
    <div className="relative w-full flex flex-col items-center py-8">
      <SectionHead
        title="Manfaat Kesehatan"
        desc="Jamur sebagai sumber kesehatan yang bermanfaat bagi kesehatan manusia."
        {...props}
      />
      <div className="flex items-center justify-center my-10 h-72 w-72 rounded-full overflow-hidden bg-popover">
        <Image
          src="/images/health-benefit.webp"
          alt="health-benefit"
          width={500}
          height={500}
          quality={100}
          className="object-cover ml-2 mb-4 rounded-full w-4/5 h-4/5 brightness-90"
        />
      </div>
      <div className="w-full">
        {healthBenefit.map((benefit) => (
          <div
            key={benefit.id}
            className="grid grid-cols-7 xs:grid-cols-8 gap-8"
          >
            <div className="mt-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                <span className="text-white font-semibold">
                  {benefit.id}
                </span>
              </div>
            </div>
            <div className="col-span-6 xs:col-span-7 mt-4">
              <h4
                className={`${signika} text-lg md:text-xl text-start`}
              >
                {benefit.title}
              </h4>
              <p className={` ${catamaran} text-start text-sm py-3`}>
                {benefit.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthBenefitSection;
