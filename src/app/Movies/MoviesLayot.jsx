import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function MoviesLayot(props) {
    let imgPath = "https://image.tmdb.org/t/p/w1280";
    const {title,id, poster_path, release_date} = props
  return (
    <div className='p-5 '>
    <Link href={`/${id}`}>
    <Image src={imgPath + poster_path} width={400} height={400} alt={title} />
    </Link>
    <h1>{title}</h1>
    <h2>{release_date}</h2>
</div>
  )
}
