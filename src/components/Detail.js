import React, { useEffect,useState } from 'react'
import ReactStars from 'react-stars'
import { useParams } from 'react-router-dom';
import {db} from './firebase/firebase';
import {doc,getDoc} from 'firebase/firestore';
import Review from './Review'

const Detail = () => {
  const {id} = useParams();
  const [data,setData] = useState({
    title:"",
    year:"",
    image:"",
    description:"",
    rating:"0",
    rated:0
  })

  useEffect(() => {
    async function getData(){
        const _doc = doc(db,"movies",id);
      const _data = await getDoc(_doc)
      setData(_data.data());
    }
    getData();
  },[])


  return (
    <div className='p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center'>
   <img className='h-30 ' src={data.image}  />
   <div className='md:ml-4 ml-0 w-full md:w-1/2'>
    <h1 className='text-3xl font-bold text-gray-300'>{data.title} 
    <span className='text-lg'>({data.year} )</span> </h1>

    <ReactStars 
              size={20}
              half={true}
              value={data.rating/data.rated}
              edit={false}
              />

        <p className='mt-3'>{data.description}</p>
        <Review id={id} prevRating={data.rating} userRated={data.rated}/>
   </div>
    </div>
  )
}

export default Detail