import { useState } from "react";

import TrainerBg from "../images/trainers/trainer-bg.png";
import Shape from "../images/trainers/shape.png";

const TrainerCard = ({ image, name, role }) => {
  const [imgHover, setImgHover] = useState(false);

  const hoverBox = () => {
    setImgHover(true);
  };

  const hoverBoxRemove = () => {
    setImgHover(false);
  };

  return (
    <>
      <div
        onMouseEnter={hoverBox}
        onMouseLeave={hoverBoxRemove}
        className="relative cursor-pointer w-[35rem] min450:w-full flex flex-col select-none"
      >

        {/* trainer img */}
        <img
          src={image}
          alt="trainer"
          style={{ transition: "all 0.3s" }}
          className={`w-[22rem] z-10 relative grayscale mx-auto ${
            imgHover ? "hover:grayscale-0" : ""
          }`}
        />
        
        {/* trainer bg */}
        <img
          style={{ transition: "all 0.3s" }}
          src={TrainerBg}
          alt="trainer_background"
          className={`absolute top-[4px] w-full scale-[1] `}
        />

        {/* trainer description */}
        <div className="box-desc bg-white w-full text-center shadow-lg z-20 rounded-[6px] px-[20px] py-[30px] absolute -bottom-[31px]">
          <img
            alt="shape"
            src={Shape}
            className="absolute -top-[25px] left-[113px]"
          />
          <i className="fa-solid fa-angle-up absolute -top-[16px] left-[162px] text-3xl"></i>
          <h3 className="font-bold text-[2.4rem] ">{name}</h3>
          <p className="font-medium text-[1.5rem] text-[#646464]">{role}</p>
          <div className="flex gap-8 text-[#646464] w-full justify-center mt-5 text-[1.6rem]">
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-regular fa-envelope"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainerCard;
