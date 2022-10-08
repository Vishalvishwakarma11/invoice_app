import React from 'react'

export default function MainDetails({name, address, email,phone}) {
  return (
    <div>
        <section className="flex flex-col items-start justify-end md:mb-16">
          <h3 className="text-xl uppercase md:text-2xl">{name}</h3>
          <p>{phone}</p>
          <p>{email}</p>
          <p className='lg:w-1/2 text-justify'>{address}</p>
        </section>
    </div>
  )
}
