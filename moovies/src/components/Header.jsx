import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs'


function getLocalStoreg () {
  return localStorage.getItem('theme') || 'light'
}

function Header() {
    const [dark, setDark] = useState(getLocalStoreg())
  
    
   useEffect(() => {
        document.documentElement.dataset.theme = dark
        localStorage.setItem('theme', dark)
      }, [dark])
    const setMode = () => {
  
      setDark((prev) => {
        return prev == "light" ? "coffee" : "light" 
      })
      
    }
  
  return (
    <div className='max-w-6xl max-md:px-5  flex items-center py-6 justify-between  mx-auto'>
      <NavLink to='/'>
        <div className='flex select-none items-center'>
        <img src="https://cdn.freebiesupply.com/logos/large/2x/google-play-movies-tv-logo-png-transparent.png" width='50px' height='90px' alt="" />
        <h1 className='text-4xl font-bold '>MOVIES</h1>
        </div>
         </NavLink>
         <button className='text-2xl font-bold' onClick={setMode}>{dark === "light" ? <BsMoonStarsFill/>   : <BsSunFill/>}</button>
    </div>
  )
}

export default Header