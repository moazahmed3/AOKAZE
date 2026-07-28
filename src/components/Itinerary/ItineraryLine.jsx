export default function ItineraryLine({ number }) {
  return (
    <div className="timeline flex justify-center  relative">
      <span className="bg-primary/60 h-full w-2 block"></span>
      <span className="bg-gray-700 size-14 border absolute top-20 left-3/6 -translate-x-3/6  border-primary/80 font-bold text-lg flex justify-center items-center rounded-full text-primary">
        {number}
      </span>
    </div>
  );
}
