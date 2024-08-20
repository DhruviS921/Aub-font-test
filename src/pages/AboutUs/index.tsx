import Button from "../../components/Button";
import SvgArrowRight from "../../Icons/ArrowRight";

const index = () => {
  return (
    <div className="mt-21 mx-12 mb-12 flex flex-col gap-3">
      <p className="text-header-3 font-medium">About Us</p>
      <p className="font-book text-paragraph w-[60%]">
        Aubergine is a global digital transformation partner dedicated to
        building the next generation of digital products through strategic
        product consultation.
      </p>
      <Button
        buttonText="Case Studies"
        className="bg-none text-paragraph-cta text-purple px-0 w-fit py-0"
        endIcon={<SvgArrowRight stroke="#524FF4" />}
      />
    </div>
  );
};

export default index;
