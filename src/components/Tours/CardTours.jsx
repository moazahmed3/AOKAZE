import { IoLocationOutline } from "react-icons/io5";
import { LuCalendarDays } from "react-icons/lu";
import { PiCity } from "react-icons/pi";

export default function CardTours({tour}) {
  return (
    <div
      key={tour.id}
      className="bg-white rounded-2xl shadow-md overflow-hidden"
    >
      <img
        src={tour.image}
        alt={tour.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        {/* Top Info */}
        <div className="flex justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center gap-2">
            <LuCalendarDays size={18} />
            {tour.days} Days
          </span>

          <span className="flex items-center gap-2">
            <IoLocationOutline size={20} />
            {tour.country}
          </span>

          <span className="flex items-center gap-2">
            <PiCity size={20} />
            {tour.cities} Cities
          </span>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-secondary">{tour.title}</h2>

        {/* Categories */}
        <p className="text-caption text-lg mt-2">
          {tour.categories.join(" • ")}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-yellow-500 text-2xl ">★★★★★</span>
          <span className="text-gray-600">
            {tour.rating} ({tour.reviews})
          </span>
        </div>

        {/* Price */}
        <div className="mt-4">
          <span className="text-caption">From </span>
          <span className="text-xl text-secondary font-bold">
            ${tour.price.toLocaleString()}
          </span>
          <span className="text-caption text-sm"> / Person</span>
        </div>
      </div>
    </div>
  );
}
