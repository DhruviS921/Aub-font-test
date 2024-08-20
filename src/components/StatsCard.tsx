const StatsCard = ({
  numberTitle,
  subTitle,
  description,
}: {
  numberTitle: string;
  subTitle: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-4 ">
      <p className="text-display w-fit relative after:block after:w-full after:h-3 after:bg-aqua after:-mt-3">
        {numberTitle}
      </p>
      <p className="text-header-5-cta font-medium">
        {subTitle} <br />
        <span className="text-small-para-cta ">{description}</span>
      </p>
    </div>
  );
};

export default StatsCard;
