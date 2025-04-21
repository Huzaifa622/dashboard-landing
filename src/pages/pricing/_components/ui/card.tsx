
// import { Button } from "@/components/ui/button"

import SubsDialog from "./subs-dialog";


function Card({data}:{data:SubscriptionPackage}) {
  return (
    <div className="w-[300px] hover:border-black rounded-sm border bg-white hover:shadow-xl  transition-all ease-linear">
      <div className="py-8 p-4">
        <div className="flex gap-2 items-center ">
          <h1 className="text-5xl font-bold">${data.price}</h1>
          <div className="text-xs">
            <h4>USD</h4>
            <h3>{data.duration_value} / {data.duration_unit}</h3>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-black text-4xl ">{data.name}</h1>
        </div>
        <div className="py-4 border-t">
          <h1 className="text-xl"> Features</h1>
          <ul className="list-disc ml-4 opacity-70 text-sm space-y-2">
            <li>No of Lawyer : {data.no_of_lawyers}</li>
            <li>No of Case Per Lawyer : {data.no_of_case_per_lawyer}</li>
            <li>Base Cost Per Lawyer : ${data.base_cost_per_lawyer}</li>
            <li>Base Cost Per Case : ${data.base_cost_per_case}</li>
            
          </ul>
        </div>
        <div className="py-4 border-t">
          <h1 className="text-xl"> Description</h1>
          <div className="list-disc ml-4 opacity-70 text-sm space-y-2">
            <p>{data.description}</p>
            
          </div>
        </div>
        <div>
       
  <SubsDialog id={data.id} />
    
        </div>
      </div>
    </div>
  );
}

export default Card;
