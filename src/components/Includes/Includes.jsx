import { FaCheck } from "react-icons/fa";
import { RiCloseLine } from "react-icons/ri";
import IncludesCard from "./IncludesCard";

export default function Includes() {
  const travelInfo = {
    included: {
      subTitle: "INCLUDED",
      title: "What's taken care of",
      background: "bg-white",
      titleColor: "text-secondary",
      listColor: "#222222",
      icon: <FaCheck size={15} />,
      circle: "bg-primary/20 text-primary/90",
      items: [
        {
          id: 1,
          text: "9 nights in 5-star hotels & luxury ryokan",
        },
        {
          id: 2,
          text: "English-speaking Japan specialist guide",
        },
        {
          id: 3,
          text: "Daily breakfast · 6 curated dinners including 1 Michelin",
        },
        {
          id: 4,
          text: "Private tea ceremony & calligraphy workshop",
        },
        {
          id: 5,
          text: "24/7 concierge on the ground in Japan",
        },
      ],
    },

    notIncluded: {
      subTitle: "Not INCLUDED",
      background: "bg-[#2E4A6B]",
      titleColor: "text-third",
      listColor: "text-white",
      icon: <RiCloseLine size={20} />,
      circle: "bg-third/20 text-third/90",

      title: "What to plan for",
      items: [
        {
          id: 1,
          text: "International flights to and from Japan",
        },
        {
          id: 2,
          text: "Personal expenses & travel insurance",
        },
        {
          id: 3,
          text: "Meals not listed in the daily itinerary",
        },
        {
          id: 4,
          text: "Optional experiences & spa treatments",
        },
        {
          id: 5,
          text: "International flights to and from Japan",
        },
      ],
    },
  };

  return (
    <section className="bg-third py-20">
      <div className="container">
        <div className="main-header flex items-center gap-5 ">
          <span className="w-16 h-0.5 bg-primary"></span>
          <span className="text-caption">WHAT’S INCLUDED</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <IncludesCard info={travelInfo.included} />
          <IncludesCard info={travelInfo.notIncluded} />
        </div>
      </div>
    </section>
  );
}
