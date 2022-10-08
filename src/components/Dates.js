import React from "react";

export default function Dates({invoiceDate, invoiceNumber}) {
  return (
    <div>
      <section>
        <article className="my-5 flex items-end justify-end ">
          <ul>
            <li className="bg-gray-100 p-1">
              <span className="font-bold">Invoice number: {invoiceNumber}</span>
            </li>
            <li className="p-1">
              <span className="font-bold">Invoice date: {invoiceDate} </span>
            </li>
          </ul>
        </article>
      </section>
    </div>
  );
}
