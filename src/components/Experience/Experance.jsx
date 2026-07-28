import { AiFillTruck, AiOutlineBarChart } from "react-icons/ai";
import { FaBus } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";

export default function Experience() {
  return (
    <section id="Experience" className="bg-third py-10">
      <div className="container">
        <div className="main-header flex justify-center items-center gap-3">
          <span className="bg-primary h-0.5 w-10 block"></span>
          <span className="text-caption">EXPERIENCE HIGHLIGHTS</span>
          <span className="bg-primary h-0.5 w-10 block"></span>
        </div>

        <h2 className="text-center text-secondary/90 font-bold my-5">
          Why you’ll love this <br /> journey
        </h2>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          <div className="card bg-white p-8 shadow rounded-lg">
            <span className="size-10 flex justify-center items-center rounded-full bg-secondary text-primary" >
              <FaBus size={20} />
            </span>

            <h3 className="my-4" >Sakura Escapes</h3>
            <p className="text-caption text-base "  >Wander through breathtaking cherry blossom gardens.</p>
          </div>
          <div className="card bg-white p-8 shadow rounded-lg">
            <span className="size-10 flex justify-center items-center rounded-full bg-secondary text-primary" >
              <FaWheatAwn  size={20} />
            </span>

            <h3 className="my-4" >First-Class Rail</h3>
            <p className="text-caption text-base "  >Experience Japan's fastest and most comfortable rail travel.</p>
          </div>
          <div className="card bg-white p-8 shadow rounded-lg">
            <span className="size-10 flex justify-center items-center rounded-full bg-secondary text-primary" >
              <AiFillTruck  size={20} />
            </span>

            <h3 className="my-4" >Fine Dining</h3>
            <p className="text-caption text-base "  >Discover unforgettable flavors with premium local dining.</p>
          </div>
          <div className="card bg-white p-8 shadow rounded-lg">
            <span className="size-10 flex justify-center items-center rounded-full bg-secondary text-primary" >
              <AiOutlineBarChart  size={20} />
            </span>

            <h3 className="my-4" >Temple Trails</h3>
            <p className="text-caption text-base "  >Visit Japan's most treasured cultural landmarks.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
