import Review from "@/components/review";
import DemoBTN from "./ui/demo-btn";
import TryBTN from "./ui/try-btn";
import Card from "./ui/card";


function Herobanner() {
  return (
    <div>
      <div className="flex flex-col items-center gap-6">
        <Review />
        <h1 className="text-primary-foreground">
          EVS: The #1 legal practice management software
        </h1>
        <h1 className="text-3xl font-bold">
          Software made for law firms, loved by clients
        </h1>
        <h1 className="">
          The top-rated case management software by legal professionals and
          clients alike.
        </h1>
        <DemoBTN />
        <TryBTN />
      </div>
      <div className="flex flex-col gap-4">
        <div className="relative flex justify-center">
          <img
            src="images/img2.png"
            alt="img1"
            className="absolute w-52  left-0 top-[25%] z-10"
          />
          <img src="images/img1.png" alt="img1" className="w-[80%] z-20" />
          <img
            src="images/img3.png"
            alt="img1"
            className="absolute w-52 right-0 top-[25%] z-10"
          />
        </div>
        <div className="flex justify-center  items-center" >
          <div className="flex items-center gap-6 w-[70%]" >
          <div className="flex items-center gap-6">
            <Card percent="100+" para="Approved by more than 100 bar associations and law societies worldwide, including all 50 US state bars" />
          </div>
          <div className="flex items-center gap-6">
            <Card percent="150,000+" para="Trusted by thousands of legal professionals from firms of all sizes, in more than 130 countries across the globe." />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Herobanner