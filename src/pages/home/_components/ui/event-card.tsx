import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


function EventCard() {
  return (
    <div className="border p-6 rounded-2xl">
    <div className="uppercase text-xs mb-4">
      {" "}
      <span className="uppercase bg-green-700 px-2 py-1 rounded-md">
        Popular
      </span>{" "}
      <span>On-Demand Webinar</span>
    </div>

    <h1 className="text-xl font-bold mb-6">
      Deep Dive into the Latest Trends in Legal
    </h1>
    <Link
      to={""}
      className="group text-white flex gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200"
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
  )
}

export default EventCard