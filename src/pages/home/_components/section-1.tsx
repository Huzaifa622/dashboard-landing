

function Section1() {
  return (
    <div className="flex flex-col items-center py-12 gap-6 max-w-screen-2xl mx-auto w-[90%] md:w-[60%]" >
        <img src="images/bg1.png" alt="bg1" />
        <div className="flex flex-wrap text-center md:text-start justify-center gap-8 md:justify-between items-center" >
            <div>
                <h1 className="text-2xl font-bold" >Watch an on-demand demo of EVS</h1>
                <h6 className="text-base font-bold">See how law firms like yours use EVS to deliver great client experiences.</h6>
            </div>
            <img src="images/pic1.png" alt="play" className="w-24" />
        </div>
    </div>
  )
}   

export default Section1