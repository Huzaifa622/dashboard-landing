import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./ui/emblacrousel";

const OPTIONS: EmblaOptionsType = { dragFree: true };
// const SLIDE_COUNT = 16;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const slides = [
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
  {
    id: 1,
    image: "images/wom.png",
    title: "Koenig|Dunne Boosts Revenue 30% and Speeds Billing",
    topic: "Case Study",
  },
];
function Section4() {
  return (
    <div className="bg-accent py-20">
      <div className=" ">
        <div className=" mb-8 max-w-screen-2xl mx-auto w-[65%]">
          <h4 className="text-primary-foreground mb-4">
            Make Billing and Payments Easy
          </h4>
          <h1 className="text-[1.7rem] font-bold mb-4">
            Legal software that makes invoicing easy for you, and payments
            seamless for clients
          </h1>
          <p className="opacity-70 mb-4">
            Reduce friction when it comes time to get paid with EVS’s billing
            and payment solutions, including branded invoices, automated
            reminders, and electronic and in-person payment options.
          </p>
          <button className="bg-[#0069D1] text-white py-2 px-5 rounded-full text-sm">
            Streamline billing and payments
          </button>
        </div>
        <EmblaCarousel slides={slides} options={slides.length > 1 ? OPTIONS : {}} />
        <div className="flex justify-between items-center max-w-screen-2xl mx-auto w-[65%]" >
        <div className="">
            <h1 className="text-2xl font-bold" >Manage your law firm's finances in
            EVS</h1>
            <p>See how EVS makes billing, payments, and accounting easier than ever..</p>
        </div>
        <div className="" ><img src="images/man.png" alt="asdasd" className="w-24" /></div>
      </div>
      </div>
    </div>
  );
}

export default Section4;
