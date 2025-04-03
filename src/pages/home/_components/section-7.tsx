
import SectionCard from "./ui/section-card";

function Section7() {
  return (
    <div className="bg-accent">
      <div className="max-w-screen-2xl mx-auto w-[80%] py-8">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-3xl">The EVS Advantage</h1>
          <div className="rounded-4xl flex gap-1">
            <SectionCard/>
            <SectionCard/>
            <SectionCard/>
            <SectionCard/>
          </div>
          <div className="flex items-center gap-8">
            <img src="images/man.png" alt="women" className="w-24" />
            <div><h2 className="text-2xl font-bold" >Getting started with EVS is easy</h2>
            <h5>Book a demo today and see EVS in action yourself.</h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
