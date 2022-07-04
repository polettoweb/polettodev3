import React from 'react'

const ExpCard = ({ item }) => {
  return (
    <li className="expcard" data-cy="expcard">
      <svg
        className="dot"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
      >
        <circle cx="12" cy="12" r="12" fill="var(--text-copy-secondary)" />
      </svg>
      <div className="expcard__title text-background-primary bg-copy-secondary p-5">
        <p className="font-bold text-lg">{item.title}</p>
      </div>
      <div className="w-full py-5 px-10 h-auto">
        <p>{item.company} - {item.location}</p>
        <p className="pb-3 font-bold">{item.date}</p>
        <p className="pb-3">{item.text}</p>
      </div>
    </li>
  )
}

export default ExpCard