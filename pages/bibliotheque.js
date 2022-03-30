import { PauseIcon, PlayIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { Songs } from "../components/player/songs";    
import {Context} from '../context/index';        

const Bibliotheque = () => {

    const {state,dispatch} = useContext(Context)
    const playSong = (item) => {
        dispatch({type:"CHANGE_SONG", payload:item});
    }

  return (
<div style={{paddingBottom:"150px"}}>
 <div className="w-full">
        <div className="grid grid-cols-4 gap-6">

    {Songs.map((song) => {
        let isPlaying = state.inPlay.id == song.id;

      return(<div key={song.id}> 
            <div className="rounded">
            <div onClick={() => playSong(song)} style={{backgroundImage:`url(${song.image})`, backgroundPosition:"center",backgroundSize:"cover"}} className="w-full h-64 flex flex-col justify-between  rounded-lg mb-6 cursor-pointer relative overflow-hidden">
                <div style={{backgroundColor:"rgb(18 18 18 / 69%)"}} className="absolute h-full z-10 w-full"></div>
                <div className="h-full relative z-20">
                    <div className="h-full flex items-end p-3">
                        {isPlaying && <PauseIcon className="text-white h-16 w-16" />}
                        {!isPlaying && <PlayIcon className="text-white h-16 w-16"/>}
                        <div>
                            <p><span className="text-white font-bold text-xl">{song.artist}</span></p>
                            <p><span className="text-white text-xs font-bold">{song.title}</span></p>
                        </div>
                    </div>
                </div>
            </div>   
            </div>
       </div>)
    })}
</div>
</div>
</div>

  )
}

export default Bibliotheque;