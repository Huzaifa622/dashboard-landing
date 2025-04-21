import { useEffect, useState } from "react"
import MainSection from "./_components/main-section"
// import { api } from "@/lib/axios-instance"
import { getPackages } from "@/services/get-packages"


 function Pricing() {
const [packages , setPackages] = useState<SubscriptionPackage[]>([])
  const fetchPackages = async () =>{

    const res = await getPackages()
    setPackages(res.data)
    // console.log(res)
  }
  useEffect(()=>{

    fetchPackages()
  },[])
  return (
    <>
    <MainSection packages={packages} />
    </>
  )
}

export default Pricing