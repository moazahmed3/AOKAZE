import Accordion from "./Accordion";

export default function FQA() {
  const faqData = [
    {
      id: 1,
      title: "Is this tour truly private?",
      content:
        "Yes. Every itinerary is completely private and designed exclusively for you and your travel companions. No other travelers will join your experience.",
    },
    {
      id: 2,
      title: "What level of fitness is required?",
      content:
        "Most activities require only a moderate level of fitness. Comfortable walking is recommended, and the itinerary can be adjusted to suit your preferences.",
    },
    {
      id: 3,
      title: "Can the itinerary be customised?",
      content:
        "Absolutely. Every part of the itinerary can be personalized, including destinations, accommodations, activities, and dining experiences.",
    },
    {
      id: 4,
      title: "What is the booking deposit?",
      content:
        "A 30% deposit is required to confirm your reservation. The remaining balance can be paid before your departure date.",
    },
    {
      id: 5,
      title: "Do you arrange flights?",
      content:
        "We can assist with international and domestic flight recommendations, while flight bookings can be arranged through our trusted travel partners.",
    },
  ];
  return (
    <section id="Fqa" className="bg-third py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-10 items-center ">
          <div className="caption">
            <div className="main-header flex items-center gap-5 ">
              <span className="w-16 h-0.5 bg-primary"></span>
              <span className="text-caption">FQA</span>
            </div>
            <h2 className="text-secondary font-semibold">
              Questions our <br /> travelers ask us.
            </h2>
            <p className="text-base text-caption/80 mt-4">
              Anything else? Our Japan desk answers within a day.
            </p>
          </div>
          <Accordion items={faqData}  />
        </div>
      </div>
    </section>
  );
}
