import React from 'react'

export default function Notes({notes}) {
  return (
    <div>
        <section className=" mt-10 mb-5 border-t-2 border-gray-400 pt-5" >
          {/* Textarea */}
          <h3>Notes: {notes}</h3>
        </section>
    </div>
  )
}
