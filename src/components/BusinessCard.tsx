import SvgArrowRight from "../Icons/ArrowRight";
import Button from "./Button";

const BusinessCard = ({ title }: { title: string }) => {
  return (
    <div className="flex p-6 bg-blue flex-col gap-4">
      <p className="text-small-para-cta text-aqua">{title}</p>
      <div className="flex flex-col gap-2">
        <p className="text-header-4-cta">We systematically mold powerful ideas and bring.</p>
        <p className="text-small-para-cta text-gray">
          Our ecosystem of design, engineering, branding, and business experts
          serves as your partner in realizing your vision into market-ready
          products and solutions.
        </p>
      </div>
      <Button buttonText="Learn More" className="!px-0 !py-0" endIcon={<SvgArrowRight stroke="#524FF4" />} />
    </div>
  );
};

export default BusinessCard;
