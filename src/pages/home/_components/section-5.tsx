import Title from "./ui/title";

function Section5() {
  return (
    <div className="bg-[#04304C] text-white">
      <div className="max-w-screen-2xl mx-auto w-[60%] py-16 ">
        <div className=" shadow-xl shadow-gray-500 rounded-xl">
          <div className="flex">
            <div className="p-8 w-[60%]">
              <Title title="Connect With Clients" />
              <h1 className="text-[1.7rem] font-bold mb-4">
                Effortlessly stay in touch with clients
              </h1>
              <p className="text-sm mb-2">
                Today's legal clients are used to having information at their
                fingertips—and when it comes to legal issues, not having the
                latest case updates can cause added stress and anxiety. Use
                EVS’s intuitive client portal—available via the web or mobile
                app—to ensure clients are always informed and engaged.
              </p>
              <p className="text-sm">
                Now, messages, documents, and calendar events are more organized
                than ever. Clients can even view and pay their invoices, all
                online or through the mobile app. No more digging through emails
                or playing phone tag—just simple, straightforward
                communications.
              </p>
              <button className=" border mt-5 border-white text-white py-2 px-5 rounded-full text-sm">
              Set your clients up for success
          </button>
            </div>
            <div className="w-[60%]" >
              <img src="images/oldm.png" alt="old man" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
