function Card() {
  return (
    <div className="w-[300px] h-[500px]  hover:border-black rounded-sm border bg-white hover:shadow-xl  transition-all ease-linear">
      <div className="py-8 p-4">
        <div className="flex gap-2 items-center ">
          <h1 className="text-5xl font-bold">$38</h1>
          <div className="text-xs">
            <h4>USD</h4>
            <h3>user / month</h3>
          </div>
        </div>
        <div className="py-4">
          <h1 className="text-black text-4xl ">Silver</h1>
        </div>
        <div className="py-4 border-t">
          <h1 className="text-xl"> Features</h1>
          <ul className="list-disc ml-4 opacity-70 text-sm space-y-2">
            <li>Manage calendars, documents, and tasks in one place.</li>
            <li>
              Get paid faster by offering clients flexible online payment
              options.
            </li>
            <li>
              Accurately track time and bill for hourly, flat fee, or
              contingency matters.
            </li>
            <li>
              Work more efficiently with email and e-signature integrations.
            </li>
          </ul>
        </div>
        <div>
          <button className="border bg-black text-white hover:bg-white hover:text-black transition-all ease-linear w-full p-2 rounded-full">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
