import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import EventCard from "./ui/event-card";

function Section8() {
  return (
    <div className="bg-[#04304C] text-white py-6">
      <div className="max-w-screen-2xl mx-auto w-[80%]">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl font-bold">Events</h1>

            <div className="flex gap-2 ">
              <div className="w-[50%] relative group  transition-all ease-linear">
                <img src="images/bg2.png" alt="backgorund" />
                <div className="bg-black/50 opacity-0 invisible bg-clip-padding backdrop-filter backdrop-blur-xs flex-col gap-4 transition-all ease-linear duration-300 absolute bottom-0 left-0 p-2 pb-24 rounded-b-2xl py-8 group-hover:opacity-100 group-hover:visible">
                  <div className="text-xs ">Event</div>
                  <div>
                    <h1 className="text-base mb-2">
                      Connect with peers and spark fresh ideas at legal’s
                      biggest conference
                    </h1>
                    <p className="text-xs">
                      Unite with the brightest minds in legal at EVS! Join us
                      October 16–17, 2025 in Boston, MA, for innovative
                      workshops, inspiring speakers, and more.
                    </p>
                  </div>
                  <Link
                    to={""}
                    className="group text-white flex text-lg gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200"
                  >
                    Watch Now
                    <span
                      aria-hidden="true"
                      className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                    >
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-3">
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
            <button className="px-4 py-2 border font-bold rounded-full">
              See all Events
            </button>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-2xl font-bold">Resources</h1>

            <div className="flex gap-2 ">
              <div className="w-[50%] relative group  transition-all ease-linear">
                <img src="images/bg3.png" alt="backgorund" />
                <div className="bg-black/50 opacity-0 invisible bg-clip-padding backdrop-filter backdrop-blur-xs flex-col gap-4 transition-all ease-linear duration-300 absolute bottom-0 left-0 p-2 pb-24 rounded-b-2xl py-8 group-hover:opacity-100 group-hover:visible">
                  <div className="text-xs ">Event</div>
                  <div>
                    <h1 className="text-base mb-2">
                      Connect with peers and spark fresh ideas at legal’s
                      biggest conference
                    </h1>
                    <p className="text-xs">
                      Unite with the brightest minds in legal at EVS! Join us
                      October 16–17, 2025 in Boston, MA, for innovative
                      workshops, inspiring speakers, and more.
                    </p>
                  </div>
                  <Link
                    to={""}
                    className="group text-white flex text-lg gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200"
                  >
                    Watch Now
                    <span
                      aria-hidden="true"
                      className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"
                    >
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="w-[50%] flex flex-col gap-3">
                <EventCard />
                <EventCard />
                <EventCard />
              </div>
            </div>
            <button className="px-4 py-2 border font-bold rounded-full">
              See all Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
