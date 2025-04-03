import { CardStack } from "@/components/ui/card-stack";
// import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CARDS = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    img: "images/carousel.png",
    content: (
      <p>
        Clients turn to us to help them through the worst experience of their
        lives. It's our job to handle the legal work so our clients can focus on
        their future.
      </p>
    ),
  },
  {
    id: 1,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    img: "images/carousel.png",
    content: (
      <p>
        Clients turn to us to help them through the worst experience of their
        lives. It's our job to handle the legal work so our clients can focus on
        their future.
      </p>
    ),
  },
  {
    id: 2,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    img: "images/carousel.png",
    content: (
      <p>
        Clients turn to us to help them through the worst experience of their
        lives. It's our job to handle the legal work so our clients can focus on
        their future.
      </p>
    ),
  },
  {
    id: 3,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    img: "images/carousel.png",
    content: (
      <p>
        Clients turn to us to help them through the worst experience of their
        lives. It's our job to handle the legal work so our clients can focus on
        their future.
      </p>
    ),
  },
];
function Section6() {
  return (
    <div className="bg-[#04304C] text-white">
      <div className="max-w-screen-2xl mx-auto w-[60%] py-16 ">
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-4xl text-center" >
            Legal professionals love the way EVS connects their cases and
            clients
          </h1>
          <Link
            to={"try"}
            className="group text-white flex gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200"
          >
            View all Customer Stories
            <span
              aria-hidden="true"
              className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
            >
              <ArrowRight size={14} />
            </span>
          </Link>
          <div className="py-8">
            <CardStack items={CARDS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
