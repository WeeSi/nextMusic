import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../../context'
import { Songs } from '../player/songs';

const RandomCardArtist = () => {
    
    const {state,dispatch} = useContext(Context);
    const [song, setsong] = useState(null);

    useEffect(() => {
        const random = Math.floor(Math.random() * Songs.length);
       setsong(Songs[random]);
    
    }, []);
    
  return (
    <div className='mt-9'>
        <div style={{backgroundColor:"var(--theme-podcast-player)"}} className='p-4 rounded-lg shadow-md'>
            <div onClick={() => {
                dispatch({type:"CHANGE_SONG", payload:song})
            }} className="flex-shrink-0 cursor-pointer">
             {song?.image && <img className="rounded-lg h-56 w-full object-cover" src={song?.image} alt="" />}   
            </div>

            <div className='mt-6'>
                <div><h2>{song?.title}</h2></div>
                <div><span className='text-xs'>{song?.artist}</span></div>
            </div>
        </div>
    </div>
  )
}

export default RandomCardArtist