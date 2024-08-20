const Pill = ({
  textContent,
  className,
}: {
  textContent: string;
  className?: string;
}) => {
  return <p className={`bg-light-gray rounded-full w-fit p-1 ${className}`}>{textContent}</p>;
};

export default Pill;
