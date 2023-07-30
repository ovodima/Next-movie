
'use client'
import { data } from 'autoprefixer';
import React from 'react'
import { useEffect, useState } from "react";
import MoviesLayot from './MoviesLayot';


export default function Movie() {
const [data, setData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=060f347dcc7582a34aa7ccbecd45da16`); // здесь указываем URL-адрес вашего API-маршрута
          const responseData = await response.json();
          setData((data) => data.concat(responseData.results));
        };
        fetchData();

        
      }, []);

      
  return (
    <div className="grid grid-cols-fluid gap-10 my-12 mx-32">

        {data.map(item =>         
        <MoviesLayot 
            key={item.id}
            id={item.id}
            poster_path={item.poster_path}
            release_date={item.release_date}
            title={item.title}
    />)}

    </div>
  )
}
