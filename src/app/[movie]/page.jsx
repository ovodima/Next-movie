import next from 'next';
import Image from 'next/image';
import React from 'react'

export default async function MovieDetail({params}) {
    const {movie} = params
    let imgPath = "https://image.tmdb.org/t/p/w1280";
    const data = await fetch(`
    https://api.themoviedb.org/3/movie/${movie}?api_key=060f347dcc7582a34aa7ccbecd45da16
    `, {next: {revalidate: 60}})

    const res = await data.json()
    console.log(res)
  return (
    <div className='my-12 mx-32'>
        <h2 className='text-4xl'>{res.title}</h2>
        <h2 className='text-lg'>{res.release_date}</h2>
        <h2 className='text-sm'>Runtime: {res.runtime} minutes </h2>
        <h2 className='bg-green-600 inline-block my-2 py-2 px-4 rounded text-sm'>Realesed</h2>
        <Image 
        className='my-12 w-full'
        src={imgPath + res.backdrop_path}
        width={1000}
        height={1000}
        alt='Film img'
        priority
        />
        <p>{res.overview}</p>
    </div>
  )
}
