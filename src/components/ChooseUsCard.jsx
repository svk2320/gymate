import React from "react";

const ChooseUsCard = ({ icon, accommodation }) => {
  return (
    <>
      <div className="flex items-center gap-6">
        <img
          className="bg-[#2b2b2b] hover:bg-[#ff0336] ease-in duration-200 w-[6.5rem] rounded-full p-4"
          src={icon}
          alt="icon"
        />
        <p className="text-white font-bold text-[18px] max-w-[150px]">
          {accommodation}
        </p>
      </div>
    </>
  );
};

export default ChooseUsCard;
