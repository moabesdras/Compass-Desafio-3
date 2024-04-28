
import React from "react";

export default function ProductColor(props: any) {
  return (
    <div>
      <h1>Color</h1>
      <ul className="flex flex-row gap-4 list-none p-0">
        {Array.from(
          [
            { color: "#816DFA", label: "Purple" },
            { color: "#000000", label: "Black" },
            { color: "#B88E2F", label: "Brown" },
          ],
          (item, index) => (
            <li key={index}>
              <button
                className={`rounded-full bg-[${item.color}] w-10 h-10`}
                aria-label={item.label}
                title={item.label}
              ></button>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
