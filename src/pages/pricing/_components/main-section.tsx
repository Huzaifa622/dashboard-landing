import Card from "./ui/card"


function MainSection() {
  return (
    <div className="bg-accent" >
    <div className="max-w-screen-2xl mx-auto w-[80%] py-12 ">
        <div className="flex flex-col items-center " >
        <h3 className="capitalize text-sm bg-black/10 px-2 rounded-xs mb-2" >pricing</h3>
        <h1 className="text-5xl font-bold w-[40%] text-center" >Plan that support your growth</h1>
        </div>
        <div className="py-8 flex gap-4 flex-wrap justify-center" >
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          </div>
    </div>
    </div>
  )
}

export default MainSection