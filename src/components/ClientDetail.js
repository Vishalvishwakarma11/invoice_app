import React from 'react'

export default function ClientDetail({clientName, clientAddress}) {
  return (
    <div><section className="mt-2 flex flex-col items-end justify-end md:mb-16">
    <h2 className="text-xl uppercase">{clientName} </h2>
    <p className='lg:w-1/2 text-justify'>{clientAddress}</p>
  </section></div>
  )
}
