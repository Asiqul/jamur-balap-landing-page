const DotSeparator = ({ scale }: { scale?: number }) => {
  return (
    <div
      className={`grid grid-cols-3 gap-1 py-1 ${
        scale ? `scale-${scale}` : ' scale-75'
      }`}
    >
      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
      <span className="bg-primary h-1.5 w-1.5 rounded-full"></span>
    </div>
  );
};

export default DotSeparator;
