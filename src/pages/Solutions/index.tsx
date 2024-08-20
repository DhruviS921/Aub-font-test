import Button from "../../components/Button";
import SvgArrowRight from "../../Icons/ArrowRight";

const index = () => {
  return (
    <div className="px-6 grid grid-cols-2">
      <div className="bg-light-gray"></div>
      <div className="flex flex-col gap-15 p-6">
        <div className="flex flex-col gap-3">
          <p className="text-header-4-cta font-medium">Experience Design</p>
          <p className="w-[80%] text-paragraph-cta text-gray  leading-9">
            Through human-centric design principles, we create intuitive and
            impactful user experiences that enhance customer satisfaction and
            loyalty, ultimately driving business success.
          </p>
          <div className="w-[50%] flex gap-4  text-purple text-small-para-cta">
            <div className="flex flex-col gap-2 items-start">
              <button>User Research</button>
              <button>UX Design</button>
              <button>UI Design</button>
            </div>
            <div className="flex flex-col gap-2 items-start">
              <button>UX Audit</button>
              <button>Design System</button>
            </div>
          </div>
        </div>
        <Button
          buttonText="Let's Build"
          className="text-purple  !px-0 !py-0 w-fit text-paragraph-cta"
          endIcon={<SvgArrowRight stroke="#524FF4" />}
        />
      </div>
    </div>
  );
};

export default index;
