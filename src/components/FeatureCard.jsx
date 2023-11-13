
const FeatureCard = ({classes, dayAndTiming, index,}) => {
  return (
    <>
      <div className={`item-${index}-div relative`}>
        <div className={`item-${index} ease-in duration-[0.4s] p-6`}></div>
        <div className="absolute z-10 bottom-10 left-10">
          <p className="text-white text-[3rem] font-bold">{classes}</p>
          <p className="text-white bg-[#FF0336] text-[16px] mt-3 py-1 px-5">
            {dayAndTiming}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureCard;
