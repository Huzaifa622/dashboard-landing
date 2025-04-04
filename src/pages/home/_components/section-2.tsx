import Title from "./ui/title";

function Section2() {
  return (
    <div className="py-8 max-w-screen-2xl mx-auto w-[90%] md:w-[60%]">
      <div className="flex  items-center gap-3">
        <div className="w-full md:w-[50%] flex flex-col gap-6">
          <Title title="Accelerate casework with AI" />
          <h1 className="text-3xl font-bold text-primary-foreground">
            Leverage the power of legal AI to stay laser-focused on client needs
          </h1>
          <p>
            Use artificial intelligence to make the most of your workday.
            Instantly access client and matter information, prioritize your
            time, and turn complex documents into ready-to-use insights—freeing
            you up to focus on delivering world-class client experiences.
          </p>
          <button className="border border-primary-foreground rounded-full w-[80%]  text-primary-foreground py-2 px-4">
            Learn more about Legal AI
          </button>
        </div>
        <div className=" hidden md:block w-[50%]">
          <img src="images/women.png" alt="women" />
        </div>
      </div>
      <div className="flex flex-wrap  justify-center md:justify-between items-center py-8 " >
        <div className="text-primary-foreground">
            <h1 className="text-2xl font-bold text-center md:text-start" >Amplify everything you do with AI</h1>
            <p className="text-center md:text-start" >Book a personalized demo to see how legal AI helps you meet the needs of
            today’s clients.</p>
        </div>
        <div className="" ><img src="images/man.png" alt="asdasd" className="w-24" /></div>
      </div>
    </div>
  );
}

export default Section2;
