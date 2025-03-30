import { Link } from "react-router-dom"


function DemoBTN() {
  return (
    <Link to={"/demo"} className="bg-gradient-to-r shadow-md from-blue-950 text-white px-8 font-bold text-sm py-2 rounded-full via-blue-500 to-blue-700"  >Request a Demo</Link>
  )
}

export default DemoBTN