import DotSeparator from '../ui/dotSeparator';

type sectionHeadProps = {
  title: string;
  desc: string;
  signika: string;
  catamaran: string;
};

const SectionHead = (props: sectionHeadProps) => {
  const { title, desc, signika, catamaran } = props;
  return (
    <div className="flex flex-col items-center gap-1">
      <h2 className={`${signika} text-2xl md:text-3xl`}>{title}</h2>
      <p className={`${catamaran} md:text-lg text-center`}>{desc}</p>
      <DotSeparator />
    </div>
  );
};

export default SectionHead;
