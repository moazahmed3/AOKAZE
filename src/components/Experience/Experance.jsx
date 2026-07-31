import { AiFillTruck, AiOutlineBarChart } from "react-icons/ai";
import { FaBus } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";

const experienceCards = [
  {
    icon: FaBus,
    title: "Sakura Escapes",
    description: "Wander through breathtaking cherry blossom gardens.",
  },
  {
    icon: FaWheatAwn,
    title: "First-Class Rail",
    description: "Experience Japan's fastest and most comfortable rail travel.",
  },
  {
    icon: AiFillTruck,
    title: "Fine Dining",
    description: "Discover unforgettable flavors with premium local dining.",
  },
  {
    icon: AiOutlineBarChart,
    title: "Temple Trails",
    description: "Visit Japan's most treasured cultural landmarks.",
  },
];

export default function Experience() {
  return (
    <section id="Experience" className="bg-third pt-10 pb-25">
      <div className="container">
        <div className="main-header flex justify-center items-center gap-3">
          <span className="bg-primary h-0.5 w-10 block"></span>
          <span className="text-caption">EXPERIENCE HIGHLIGHTS</span>
          <span className="bg-primary h-0.5 w-10 block"></span>
        </div>

        <h2 className="text-center text-secondary/90 font-bold my-5">
          Why you’ll love this <br /> journey
        </h2>

        <div className="cards grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {experienceCards.map((card ,index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="card bg-white p-8 shadow rounded-lg"
              >
                <span className="size-10 flex justify-center items-center rounded-full bg-secondary text-primary">
                  <Icon size={20} />
                </span>

                <h3 className="my-4">{card.title}</h3>

                <p className="text-caption text-base">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
