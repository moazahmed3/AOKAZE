export default function IncludesCard(props) {
  const {
    items,
    circle,
    icon,
    listColor,
    titleColor,
    background,
    title,
    subTitle,
  } = props.info;
  return (
    <div
      className={`box ${background}  p-10 rounded-3xl mt-10 shadow-md border-secondary/10 border`}
    >
      <span className="text-primary text-sm capitalize">{subTitle}</span>
      <h2 className={`text-4xl  font-medium  ${titleColor}`}>{title}</h2>

      <ul className="mt-6 flex gap-y-4 flex-col ">
        {items.map((item) => {
          return (
            <li className="flex items-center   gap-4 ">
              <span
                className={`w-8 h-8 min-w-8 min-h-8 rounded-full ${circle} flex items-center justify-center shrink-0`}
              >
                {icon}
              </span>
              <span className={listColor}>{item.text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
