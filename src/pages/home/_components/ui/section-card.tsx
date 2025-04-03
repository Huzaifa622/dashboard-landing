import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import Title from "./title"

function SectionCard() {
  return (
    <div className="bg-white w-[300px] flex- flex-col gap-2 p-6">
              <Title title="Integrations" />
              <h1 className="text-base font-bold">
                Integrate your favorite tools to deliver world-class experiences
              </h1>
              <ul className="list-disc pl-4">
                <li>Office 365</li>
                <li>G Suite</li>
                <li>Microsoft Teams</li>
                <li>Zoom</li>
              </ul>
              <Link
                to={""}
                className="group text-sky-600 flex gap-4 items-center hover:text-sky-900 transition ease-in-out duration-200"
              >
                Talk to us
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

export default SectionCard