import img1 from "../../assets/j1.jpg";
import img2 from "../../assets/j2.jpg";
import img3 from "../../assets/j3.jpg";
import img4 from "../../assets/j4.jpg";
import img5 from "../../assets/j5.jpg";
import img6 from "../../assets/j6.jpg";
import img7 from "../../assets/j7.jpg";
import img8 from "../../assets/j8.jpg";
import ItineraryCard from "./ItineraryCard";
import ItineraryLine from "./ItineraryLine";
export default function Itinerary() {
  const cards = [
    {
      dir: "right",
      day: "01",
      img: img1,
      title: "Arrival & First Impressions",
      description:
        "Private airport transfer to your boutique hotel in Shinjuku. Evening orientation walk through Kabukicho and dinner at a rooftop izakaya overlooking the city lights.",
      city: "Tokyo",
    },
    {
      dir: "left",
      day: "02",
      img: img2,
      title: "Tradition Meets Modernity",
      description:
        "Morning at Senso-ji Temple and Asakusa's craft markets. Afternoon in Harajuku and Omotesando's architectural gems. Dinner at a Michelin-starred tempura counter.",
      city: "Tokyo",
    },
    {
      dir: "right",

      day: "03",
      img: img3,
      title: "Fuji Five Lakes",
      description:
        "Shinkansen to Odawara, then private transfer to Kawaguchiko. Ryokan check-in, onsen soak, and kaiseki dinner with Mt. Fuji framed in your window.",
      city: "Hakone",
    },
    {
      dir: "left",

      day: "04",
      img: img4,
      title: "Ancient Capital Arrival   ",
      description:
        "Shinkansen to Kyoto. Private dawn visit to Fushimi Inari before the crowds arrive. Afternoon in Gion's preserved machiya lanes; geiko sighting near Hanamikoji.",
      city: "Kyoto",
    },
    {
      dir: "right",

      day: "05",
      img: img5,
      title: "Temples & Tea Ceremony",
      description:
        "Kinkaku-ji at sunrise, Ryoan-ji's enigmatic rock garden, and an immersive private tea ceremony in a 17th-century machiya with a certified tea master.",
      city: "Kyoto",
    },
    {
      dir: "left",

      day: "06",
      img: img6,
      title: "Sacred Deer & Street Food",
      description:
        "Morning in Nara's Todai-ji with the iconic bowing deer. Afternoon transfer to Osaka. Evening food crawl through Dotonbori — takoyaki, kushikatsu, and fresh crab.",
      city: "Nara & Osaka",
    },
    {
      dir: "right",

      day: "07",
      img: img7,
      title: "The Kitchen of Japan",
      description:
        "Private airport transfer to your boutique hotel in Shinjuku. Evening orientation walk through Kabukicho and dinner at a rooftop izakaya overlooking the city lights.",
      city: "Osaka",
    },
    {
      dir: "left",

      day: "08",
      img: img8,
      title: "Farewell to Japan",
      description:
        "Leisurely morning at leisure. Private transfer to Kansai International Airport. Departures with memories that will last a lifetime.",
      city: "Osaka",
    },
  ];

  return (
    <section id="itinerary" className="py-10 bg-secondary">
      <div className="container">
        <div className="main-header my-10 mb-20">
          <div className=" flex justify-center items-center gap-3">
            <span className="bg-primary h-0.5 w-10 block"></span>
            <span className="text-third">DAY BY DAY</span>
            <span className="bg-primary h-0.5 w-10 block"></span>
          </div>
          <h2 className="text-center text-third"> Your 8-Day Itinerary</h2>
        </div>

        {/* start temple */}

        <div className="grid   lg:grid-cols-[1fr_0.5fr_1fr] ">
          {cards.map((item, index) => {
            return index % 2 == 0 ? (
              <>
                <ItineraryCard item={item} />
                <ItineraryLine number={index + 1} />
                <div></div>
              </>
            ) : (
              <>
                <div></div>
                <ItineraryLine number={index + 1} />
                <ItineraryCard item={item} />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
}
