import { FireIcon } from '@heroicons/react/solid';
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context';
import NmBtn from '../button';
import { Songs } from '../player/songs';

const Trending = () => {
    const {state,dispatch} = useContext(Context);
    const [song, setsong] = useState(null);

    useEffect(() => {
        const random = Math.floor(Math.random() * Songs.length);
       setsong(Songs[random]);
    
    }, []);

  return (
    <>
              <span className="text-xs flex space-x-1 items-center">
                  <span className='opacity-30'>What's hot</span> <FireIcon className='h-4 text-red-500 opacity-100' /></span>
           <div className="flex justify-between items-end"> 
              <div className="w-full"> <h1 className="text-3xl font-bold">Trending</h1> </div>
              <NmBtn variant={"text"} label="More" />
            </div>
            <div className="mt-4 mb-9">
              <div className="relative flex flex-col rounded-xl shadow-md overflow-hidden">
                  <div className="flex-shrink-0 relative">
                    <div style={{backgroundColor:"rgb(47 47 47 / 33%)"}} className="absolute h-full z-10 w-full"></div>
                   {song?.image && <img style={{height:"370px"}} className="w-full object-cover" src={song.image} alt="" />} 
                  </div>
                  <div className="flex-1 w-full absolute bottom-0 z-20 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm text-black font-medium">
                         Artist
                      </p>
                      <h1 className="block mt-2 text-black text-7xl font-bold">
                        {song?.title}
                      </h1>
                    </div>
                    <div className="mt-6 flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        <NmBtn label="Play" action={() => {
                            dispatch({type:"CHANGE_SONG", payload:song})
                        }} variant={"black"} />
                      </div>
                      <div>
                        <NmBtn label="Follow" variant={"outline-black"} />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
    </>
  )
}

export default Trending;