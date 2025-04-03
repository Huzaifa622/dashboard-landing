function Section3() {
  return (
    <div className=" bg-[#E7DFC5]  py-20 ">
      <div className="max-w-screen-2xl mx-auto w-[65%]">
        <div className="flex mb-8">
          <div className="w-[35%] flex flex-col gap-4">
            <h3 className="text-primary-foreground">Simplify Case Logistics</h3>
            <h1 className="font-bold text-[1.7rem]">
              Law firm software that simplifies life for you, and for clients
            </h1>
            <p className="opacity-70">
              Stop searching for files and reduce endless back and forth with
              clients. Centralize your case-related information in one easily
              accessible location to boost transparency and streamline
              communication.
            </p>
            <button className="bg-[#0069D1] text-white py-2 px-5 rounded-full text-sm">
              Access every detail of every case
            </button>
          </div>
          <div className="w-[60%]">
            <img src="images/ee.png" alt="iamge" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="w-[35%]  ">
            <img src="images/man.png" alt="man" className="w-24 mx-auto" />
          </div>
          <div className="w-[60%] ">
            <h1 className="text-[1.8rem] font-bold" >Start a 7-day free trial of EVS</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
