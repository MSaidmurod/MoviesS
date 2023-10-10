import {useParams} from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
// icons
import {BsFillStarFill, BsCalendar2DateFill} from 'react-icons/bs'
import {BiSolidMoviePlay} from 'react-icons/bi'
import {FaFlagUsa,FaLanguage} from 'react-icons/fa'
import {MdLocalMovies} from 'react-icons/md'
import {FaPeopleLine} from 'react-icons/fa6'
import {FiAlignLeft} from 'react-icons/fi'

function ReadMore() {
    const id1 = useParams()
    const id = id1.id
    const {data, isPending, error} = useFetch(`https://www.omdbapi.com/?i=${id}&apikey=263d22d8`)

    if (isPending) {
        return <div className='absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm'><span className="loading loading-infinity loading-lg"></span></div>
    }
  
  return (
    <div className='max-w-6xl mx-auto'>
       {data && <div className='max-w-full max-md:flex-col max-md:gap-5  max-md:items-center justify-between items-center flex'>
        <div className=''>
        <img src={data.Poster} width='500px' className='h-[600px]' alt="" />
        </div>
        
        <div className='w-[600px] max-md:px-6 max-md:w-[400px]  flex flex-col gap-3'>
            <h1 className='flex items-center gap-2 hover:text-red-500 max-sm:text-xl hover:cursor-pointer text-2xl font-bold'><BiSolidMoviePlay/>{data.Title}</h1>
            <h2 className='flex items-center gap-2 hover:text-red-500 max-sm:text-xl hover:cursor-pointer text-2xl font-bold'><span><BsCalendar2DateFill/> </span>{data.Released} </h2>
            <h1 className='flex items-center gap-2 hover:text-red-500 max-sm:text-xl hover:cursor-pointer text-2xl font-bold'> <MdLocalMovies/> {data.Type.toUpperCase()}</h1>
            <h1 className='flex items-center gap-2 hover:text-red-500 max-sm:text-xl hover:cursor-pointer text-2xl font-bold'><FaLanguage/> {data.Language}</h1>
            <ul className='flex flex-col'>{data.Ratings.map((ret) => {
                return (
                    <li className='flex items-center hover:text-red-500 max-sm:text-xl hover:cursor-pointer gap-2 text-2xl font-bold' key={ret.Value}>
                        <BsFillStarFill/>
                        {ret.Source}- 
                        {ret.Value}
                    </li>
                )
            })}</ul>
            <span className='flex items-center hover:text-red-500 max-sm:text-xl hover:cursor-pointer gap-2 text-2xl font-bold'><FaFlagUsa/> {data.Country}</span>
            <p className='flex items-center hover:text-red-500 max-sm:text-xl hover:cursor-pointer gap-2 text-2xl font-bold'><div className=''><FiAlignLeft/></div> {data.Plot}</p>
            <p className='flex items-center hover:text-red-500 max-sm:text-xl hover:cursor-pointer gap-2 text-2xl font-bold'><FaPeopleLine/> {data.Actors}</p>

        </div>
       </div>}
    </div>
  )
}

export default ReadMore