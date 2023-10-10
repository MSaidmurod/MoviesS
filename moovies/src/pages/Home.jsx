import { useState } from 'react'
import {useFetch} from '../hooks/useFetch'
import Movies from './Movies'
import {ImSearch} from 'react-icons/im'

function Home() {
    const [url, setUrl] = useState(`https://www.omdbapi.com/?s=horror&apikey=263d22d8`)
    const [value, setValue] = useState('')
    const { data, isPending, error} = useFetch(url)

    if(isPending) {
      return <div className='absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm'><span className="loading loading-infinity loading-lg"></span></div>

    }
    

    if(error) {
        return (
           <div>
             <Error/>
           </div>
        )
    }

  
  
    const hendilSubmit = (e) => {
        e.preventDefault()
        setUrl(`https://www.omdbapi.com/?s=${value}&apikey=263d22d8`)
    }
    
  return (
    <div className='max-w-6xl flex  flex-col max-sm:items-center  mx-auto '>
      <div className='flex max-w-full max-sm:items-start max-md:px-5 max-sm:flex-col max-sm:gap-6 mb-5 justify-between'>
      <form onSubmit={hendilSubmit}>
        <label className='relative max-sm:w-full'>
         <input
         onChange={(e) => {
            setValue(e.target.value)
         }}
         type="text" placeholder="Search"  className="input input-bordered input-info w-full max-w-xs" />
         <button className="btn absolute right-0 btn-info"><ImSearch/></button>
        </label>
      </form>

      <select className='select select-info w-full max-w-xs max-md:h-[40px] max-md:w-[200px] rounded-lg'
      onChange={(e) => {
        setUrl(`https://www.omdbapi.com/?s=${e.target.value}&apikey=263d22d8`)
      }}
      >
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
        <option value="cartoons">Cartoons</option>
        <option value="historical">Historical</option>
        <option value="fantastic">Fantastic</option>
      </select>
      </div>
      {data && <Movies data={data}/>}
    </div>
  )
}

export default Home