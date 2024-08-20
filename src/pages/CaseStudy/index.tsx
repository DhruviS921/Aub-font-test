import Pill from "../../components/Pill";

const index = () => {
  return (
    <div className="my-11 font-book">
      <div className="pl-12 pb-12 w-[60%] flex flex-col gap-2">
        <p className="text-paragraph-cta text-purple">Cubii</p>
        <div className="flex gap-1">
          <Pill textContent="UX Design" />
          <Pill textContent="Strategy" />
          <Pill textContent="Development" />
        </div>
        <p className="text-paragraph">
          Cubii made fitness accessible, we made their fitness app accessible
        </p>
      </div>
    </div>
  );
};

export default index;
