import ProgressionImg from "../images/who-we-are/progresion.png";
import WorkoutImg from "../images/who-we-are/workout.png";
import NutritionImg from "../images/who-we-are/nutritions.png";

// NAVIGATION
export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery/page-1", label: "Gallery" },
  { href: "/schedule/monday", label: "Schedule" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/classes", label: "Classes" },
  { href: "/contact", label: "Contact" },
];

// About sections card list
export const ABOUT_CARD_LIST = [
  {
    image: ProgressionImg,
    title: "Progression",
    description:
      "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.",
  },
  {
    image: WorkoutImg,
    title: "Workout",
    description:
      " With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life.",
  },
  {
    image: NutritionImg,
    title: "Nutritions",
    description:
      "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.",
  },
];

// Feature section card list
export const FEATURE_CARD_LIST = [
  {
    classes: "Cycling",
    dayAndTiming: "Wednesday: 9:00am-10:00am"
  },
  {
    classes: "Karate",
    dayAndTiming: "Friday: 10:00am-11:00am"
  },
  {
    classes: "Power",
    dayAndTiming: "Saturday: 9:00am-10:00am"
  },
  {
    classes: "Meditation",
    dayAndTiming: "Friday: 1:00pm-2:00pm"
  },
  {
    classes: "Martial Arts",
    dayAndTiming: "Sunday: 6:00pm-7:00pm"
  },
  {
    classes: "Workout",
    dayAndTiming: "Monday: 4:00pm-5:00pm"
  },
]