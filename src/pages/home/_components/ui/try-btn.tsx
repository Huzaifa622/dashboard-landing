import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"


function TryBTN() {
  return (
    <Link to={"try"} className="group text-gray-500 flex gap-4 items-center hover:text-sky-600 transition ease-in-out duration-200">Try EVS for free<span aria-hidden="true" className="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200"><ArrowRight size={14} /></span></Link>
  )
}

export default TryBTN