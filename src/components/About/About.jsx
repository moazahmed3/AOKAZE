import { FaCalendarAlt, FaMinus, FaPlus } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { MdGroups } from "react-icons/md";

export default function About() {
  return (
    <section id="#about" className="py-25 bg-third">
      <div className="container">
        <div className="grid lg:grid-cols-2  gap-30">
          {/* caption */}
          <div className="caption">
            <div className="main-header flex items-center gap-5 ">
              <span className="w-10 h-0.5 bg-primary"></span>
              <span className="text-primary">Signature Japan Collection</span>
            </div>

            <h2 className="mb-5">
              <span className="text-primary">Where Ancient Ritual</span> <br />
              <span className="text-secondary">Meets Modern Wonder</span>
            </h2>

            <p className="text-caption text-base mb-6">
              This is Japan the way we travel it — early mornings in peaceful
              temples, long unhurried lunches with families who have preserved
              their craft for generations, and the quiet, hidden places most
              itineraries never reach.
            </p>
            <p className="text-caption text-base mb-6" >
              Across eight carefully curated days, your Orienta expert guide
              will lead you through Japan's most iconic landmarks and its most
              intimate moments. To ensure a truly personal experience, every
              departure is limited to just twelve guests. This is more than a
              tour; it's an invitation to discover Japan with depth,
              authenticity, and intention.
            </p>
            <p className="text-caption text-base mb-6">
              Expect private dawn access to centuries-old temples before the
              crowds arrive, traditional ryokan stays with tatami floors and
              soothing onsen, and exclusive dining experiences at tables few
              travelers ever discover.
            </p>

            <div className="items flex gap-5"> 
                <div className="item border-s-3 ps-4 border-primary">
                    <span className="text-secondary font-primary text-3xl mb-3 block font-bold">98%</span>
                    <p className="text-sm text-caption" >Guest satisfaction rate</p>
                </div>
                <div className="item border-s-3 ps-4 border-primary">
                    <span className="text-secondary font-primary text-3xl mb-3 block font-bold">15+</span>
                    <p className="text-sm text-caption" >Years operating in Japan</p>
                </div>
                <div className="item border-s-3 ps-4 border-primary">
                    <span className="text-secondary font-primary text-3xl mb-3 block font-bold">2,400+</span>
                    <p className="text-sm text-caption" >Travellers guided</p>
                </div>
            </div>
          </div>

          {/* card */}
          <div className="about-card p-10  bg-white  rounded-4xl shadow-lg">
            <span className="text-caption">FROM</span>
            <div>
              <span className="font-primary text-secondary text-4xl">
                $8,450
              </span>
              <span className="ms-1 text-caption">/person</span>
            </div>
            {/* boxes */}
            <div className="box mt-10 flex items-center justify-between">
              <div className="icon flex items-center gap-5 ">
                <span className="   size-10 rounded-[50%] bg-primary/10    flex items-center justify-center  ">
                  <FaCalendarAlt size={20} className="text-secondary" />
                </span>
                <span className="text-caption font-semibold text-lg">
                  Duration
                </span>
              </div>

              <div className="box-caption">
                <span className="text-secondary font-semibold text-lg">
                  8 days · 7 nights
                </span>
              </div>
            </div>

            <div className="box mt-10 flex items-center justify-between">
              <div className="icon flex items-center gap-5 ">
                <span className="   size-10 rounded-[50%] bg-primary/10    flex items-center justify-center  ">
                  <FaCalendarAlt size={20} className="text-secondary" />
                </span>
                <span className="text-caption font-semibold text-lg">
                  Rating
                </span>
              </div>

              <div className="box-caption">
                <span className="text-secondary font-semibold text-lg">
                  4.98 (214 reviews)
                </span>
              </div>
            </div>
            <div className="box mt-10 flex items-center justify-between">
              <div className="icon flex items-center gap-5 ">
                <span className="   size-10 rounded-[50%] bg-primary/10    flex items-center justify-center  ">
                  <MdGroups  size={20} className="text-secondary" />
                </span>
                <span className="text-caption font-semibold text-lg">
                  Duration
                </span>
              </div>

              <div className="box-caption">
                <span className="text-secondary font-semibold text-lg">
                  Max 12 travelers
                </span>
              </div>
            </div>
            <div className="box mt-10 flex items-center justify-between">
              <div className="icon flex items-center gap-5 ">
                <span className="   size-10 rounded-[50%] bg-primary/10    flex items-center justify-center  ">
                  <IoMdTime size={20} className="text-secondary" />
                </span>
                <span className="text-caption font-semibold text-lg">
                  Next Departure
                </span>
              </div>

              <div className="box-caption">
                <span className="text-secondary font-semibold text-lg">
                  8 days · 7 nights
                </span>
              </div>
            </div>

            {/* line */}
            <span className="bg-secondary/5 mt-5 h-0.5 w-full block"></span>

            {/* end card */}
            <span className="text-caption text-lg font-semibold my-5 block">
              GUESTS
            </span>
            <div className="counters flex justify-between items-baseline ">
              <div className="counter flex items-center gap-5">
                <span className="size-7 cursor-pointer text-secondary  border-2 border-gray-300 rounded-full flex justify-center items-center">
                  <FaPlus />
                </span>
                <span className="text-secondary text-lg font-bold">2</span>
                <span className="size-7 cursor-pointer text-secondary  border-2 border-gray-300 rounded-full flex justify-center items-center">
                  <FaMinus />
                </span>
              </div>
              <div className="price">
                <span className="font-primary   text-4xl">
                  $16,900
                </span>
                <span className="block text-end text-caption ">total</span>
              </div>
            </div>

            <button className="btn btn-primary w-full bg-secondary/90 text-third my-5">
              Reserve Your Spot
            </button>
            <p className="font-secondary text-caption text-sm">
              No payment required to reserve · Free cancellation for 14 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
