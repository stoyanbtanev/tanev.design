"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

type FAQProps = {
  items: { q: string; a: string }[];
};

export function FAQ({ items }: FAQProps) {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-row reveal" key={item.q} open={open === index}>
          <summary
            onClick={(event) => {
              event.preventDefault();
              setOpen(open === index ? -1 : index);
            }}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.q}</strong>
            <Plus className="faq-row__icon" aria-hidden="true" size={24} />
          </summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
