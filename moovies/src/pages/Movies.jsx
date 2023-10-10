import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Img.css'

function Movies({data}) {
 
  return (
   <ul>
        <div className="carousel max-w-full shadow-2xl max-h-[70vh]   carousel-center  p-4 space-x-4 bg-inherit rounded-sm">
        <div className="carousel-item flex max-md:flex max-sm:flex-col max-sm:max-w-full max-sm:items-center gap-3" >
   {data.Search && data.Search.map((mov) => {
    
       const {imdbID} = mov
        return (
            <div key={mov.imdbID}>
               <NavLink to={`readmore/${imdbID}`}> <img className='box-1 cursor-pointer  h-full' src={mov.Poster} alt="" /></NavLink>
            </div>
        )
    })}
        </div>
     </div>
   </ul>
  )
}


export default Movies