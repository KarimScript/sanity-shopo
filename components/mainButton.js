import React from 'react'
import Link from 'next/link'

const mainButton = ({text , link, style}) => {
  return (
    
    <Link href={link} className={`rounded-3xl px-7 py-4 text-2xl text-white border-2 border-slate-300 mainButton`}>
      <h3>{text}</h3>
    </Link>
  )
}

export default mainButton