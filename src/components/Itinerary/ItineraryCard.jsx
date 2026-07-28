export default function ItineraryCard(props) {
  const { img, title, day, city, description, dir } = props.item;
  return (
    <div className="card bg-gray-700 pb-3 rounded-3xl">
      <div className="card-img relative">
        <img
          src={img}
          alt=""
          className="rounded-t-3xl w-full h-52.75  object-cover
 "
        />
        <span className="badge text-third block px-6 font-semibold py-2 rounded-2xl bg-primary-dark absolute top-4 left-5 ">
          Day {day}
        </span>
        <span className="city block text-third/80 rounded-2xl bg-secondary/50 px-5 py-1 absolute bottom-3 right-3">
          {city}
        </span>
      </div>
      <div className={`card-body text-${dir} p-4`}>
        <h3 className="text-primary my-3">A{title}</h3>
        <p className="text-third/80 text-base">{description}</p>
      </div>
    </div>
  );
}
