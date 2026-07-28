export default function Explore() {
  return (
    <section id="explore" className="py-20">
      <div className="container">
        <div className="content rounded-3xl bg-linear-to-br from-[#2B456A] via-[#334D6B] to-[#5F6965] py-15 px-10 xl:px-30">
          <div className="main-header flex items-center gap-5 ">
            <span className="w-16 h-0.5 bg-primary"></span>
            <span className="text-primary">READY WHEN YOU ARE</span>
          </div>
          <h2 className="text-third text-5xl lg:text-6xl my-8 text-center lg:text-start">
            Ready to explore{" "}
            <span className="text-primary italic ">japan?</span>{" "}
          </h2>
          <p className="text-third/60 text-sm lg:text-lg">
            Reserve your dates or speak with a Japan specialist. We hold <br />
            departures a season in advance — the best ryokan rooms go first.
          </p>
          <div className="btns flex  gap-5 mt-10 flex-col lg:flex-row ">
            <button className="btn btn-primary">Book This Journey</button>
            <button className="btn btn-secondary">
              Speak with a Specialist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
