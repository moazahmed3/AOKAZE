import img1 from "../../assets/t1.jpg";
import img2 from "../../assets/t2.jpg";
import img3 from "../../assets/t3.jpg";

import CardTours from "./CardTours";

export default function Tours() {
  const tourData = [
    {
      id: 1,
      title: "Santorini Escape",
      image: img1,
      days: 6,
      country: "Greece",
      cities: 3,
      categories: ["Beach", "Luxury", "Relax"],
      rating: 4.9,
      reviews: "8.7K Reviews",
      price: 599,
    },
    {
      id: 2,
      title: "Cappadocia Adventure",
      image: img2,
      days: 5,
      country: "Turkey",
      cities: 2,
      categories: ["Adventure", "Culture", "Nature"],
      rating: 4.1,
      reviews: "5.9K Reviews",
      price: 399,
    },
    {
      id: 3,
      title: "Bali Island Retreat",
      image: img3,
      days: 9,
      country: "Indonesia",
      cities: 6,
      categories: ["Beach", "Wellness", "Nature"],
      rating: 5.0,
      reviews: "16.3K Reviews",
      price: 1099,
    },
  ];

  return (
    <section id="#tours" className="py-20 bg-third">
      <div className="container">
        <h2 className="text-center mb-14 text-secondary font-semibold">
          Other Tours <br /> You May Be Interested In
        </h2>

        <div className="grid   lg:grid-cols-2 xl:grid-cols-3 gap-6 ">
          {tourData.map((tour) => (
            <CardTours key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
