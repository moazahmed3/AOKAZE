import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function AccordionItem({ title, content, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200 ">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full hover:text-red-900 items-center justify-between gap-4 py-4 capitalize text-left transition-colors cursor-pointer"
      >
        <span className={`font-medium text-lg   hover:text-primary ${isOpen ? "text-primary/80" :"text-secondary/80"}`}>
          {title}
        </span>
        <MdKeyboardArrowDown
          className={`h-7 w-7 shrink-0  transition-transform duration-300 ease-out hover:text-primary ${
            isOpen ? "rotate-180 text-primary" : "rotate-0 text-secondary/90"
          }   `}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pb-4 pr-8 text-sm leading-relaxed text-secondary/90">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Accordion({ items }) {
  const [openIndexes, setOpenIndexes] = useState(new Set([0]));

  const toggle = (index) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className=" p-2">
      <div className="px-4">
        {items.map((item, index) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            content={item.content}
            isOpen={openIndexes.has(index)}
            onToggle={() => toggle(index)}
          />
        ))}
      </div>
    </div>
  );
}
