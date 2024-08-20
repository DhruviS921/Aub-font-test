import Button from "../../components/Button";
import SvgArrowRight from "../../Icons/ArrowRight";
import SvgChevronDown from "../../Icons/ChevronDown";

const Header = () => {
  return (
    <div className="pt-6 pb-1 px-12 flex justify-between">
      <div className="flex gap-8 items-end">
        <img src="/Images/aubergineLogo.svg" alt="logo" className="w-15 h-3" />
        <div className="flex gap-5 text-small-para">
          <p>Work</p>
          <p className="flex items-center">
            Expertise <SvgChevronDown />
          </p>
          <p>Approach</p>
          <p className="flex items-center">
            About <SvgChevronDown />
          </p>
          <p>Careers</p>
        </div>
      </div>
      <Button
        buttonText="Let's Build"
        className="bg-purple text-white text-small-para-cta px-2 py-[10px]"
        endIcon={<SvgArrowRight stroke="#FFFFFF" />}
      />
    </div>
  );
};

export default Header;
