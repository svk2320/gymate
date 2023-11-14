import { useState } from "react";
import ClassesCard from "../components/ClassesCard";

function Classes() {
  const [load, setLoad] = useState(true);

  const loadMore = () => {
    setLoad(!load);
  };

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="login-section text-center ">
        <div className="login-banner relative justify-center flex">
          <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
            Classes
          </h1>
        </div>

        {/* boxes 1*/}
        <div
          className={`container gap-12 page-padding py-[10rem] md1000:grid-cols-2 min620:grid-cols-1  grid-cols-3 grid-rows-3 text-left ${
            load ? "grid" : "hidden"
          }`}
        >
          <ClassesCard
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesCard
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
          <ClassesCard
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 pm"
          />
          <ClassesCard
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesCard
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesCard
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesCard
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesCard
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Fri: 6:00 am"
          />
        </div>

        {/* boxes 2*/}
        <div
          className={`container gap-12 page-padding py-[10rem] grid-cols-3 md1000:grid-cols-2 min620:grid-cols-1  grid-rows-3 text-left  ${
            load ? "hidden" : "grid"
          }`}
        >
          <ClassesCard
            bgImg="cycling-bg"
            title="Cycling"
            trainer="Dorian Yate"
            date="Wed: 9:00 am"
          />
          <ClassesCard
            bgImg="meditaion-bg"
            title="Meditation"
            trainer="Maria Mich"
            date="Fri: 1:00 pm"
          />
          <ClassesCard
            bgImg="mma-bg"
            title="Boxing"
            trainer="John Flex"
            date="Tue: 4:00 pm"
          />
          <ClassesCard
            bgImg="karate-bg"
            title="Karate"
            trainer="David Rich"
            date="Sat: 9:00 am"
          />
          <ClassesCard
            bgImg="powerlift-bg"
            title="Power Lifting"
            trainer="Larry Wheels"
            date="Mon: 8:00 pm"
          />
          <ClassesCard
            bgImg="workout-bg"
            title="Workout"
            trainer="Shawn Ray"
            date="Sun: 10:00 am"
          />
          <ClassesCard
            bgImg="crossfit-bg"
            title="Crossfit"
            trainer="Jenifer Alex"
            date="Wen: 9:00 pm"
          />
          <ClassesCard
            bgImg="running-bg"
            title="Running"
            trainer="Zinia Zessy"
            date="Thu: 12:00 am"
          />
          <ClassesCard
            bgImg="bodybuilding-bg"
            title="Body Building"
            trainer="Jake Paul"
            date="Mon: 8:00 pm"
          />
          <ClassesCard
            bgImg="box-bg"
            title="Mma"
            trainer="Becky Lynch"
            date="Fri: 6:00 am"
          />
          <ClassesCard
            bgImg="yoga-bg"
            title="Yoga"
            trainer="Marta Mich"
            date="Wen: 8:00 am"
          />
          <ClassesCard
            bgImg="fitness-bg"
            title="Fitness"
            trainer="Mia Malkova"
            date="Sun: 5:00 pm"
          />
        </div>

        <button
          className="text-[1.5rem] text-white bg-slate-600 px-14 py-6 font-medium uppercase shadow-2xl mb-14"
          onClick={() => {
            loadMore();
            goTop();
          }}
        >
          {load ? "show more" : "show less"}
        </button>
      </section>
    </>
  );
}

export default Classes;