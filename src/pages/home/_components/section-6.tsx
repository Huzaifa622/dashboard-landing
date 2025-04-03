import { CardStack } from "@/components/ui/card-stack"
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };
   
const CARDS = [
    {
      id: 0,
      name: "Manu Arora",
      designation: "Senior Software Engineer",
      content: (
        <p>
          These cards are amazing, <Highlight>I want to use them</Highlight> in my
          project. Framer motion is a godsend ngl tbh fam 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];
function Section6() {
  return (
    <div className="bg-[#04304C] text-white">
      <div className="max-w-screen-2xl mx-auto w-[60%] py-16 ">
     <div className="flex flex-col gap-4 items-center" >
        <h1>Legal professionals love the way EVS connects
        their cases and clients</h1>
        <Link to={"try"} className="group text-white flex gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200">View all Customer Stories<span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"><ArrowRight size={14} /></span></Link>
        <div className="py-8" >
        <CardStack items={CARDS}  />
        </div>
     </div>
      </div>
    </div>
  )
}

export default Section6