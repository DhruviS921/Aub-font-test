import Button from "../../components/Button";
import SvgArrowRight from "../../Icons/ArrowRight";

const SectionTitle = () => {
  return (
    <div className="px-12 w-[60%] gap-3 flex flex-col">
      <p className="text-header-3">Solutions for Every Business</p>
      <p className="text-paragraph">
        Our ecosystem of design, engineering, branding, and business experts
        serves as your partner.
      </p>
      <Button buttonText="Case Studies" endIcon={<SvgArrowRight stroke="#524FF4" />} className="text-white !px-0 !py-0 text-paragraph-cta mt-2" />
    </div>
  );
};

export default SectionTitle;
