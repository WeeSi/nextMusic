import { DotsHorizontalIcon, PlayIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import NmBtn from "../components/button";
import FavArtists from "../components/favartists/FavArtists";
import { Songs } from "../components/player/songs";
import RandomCardArtist from "../components/randomCardArtist/RandomCardArtist";
import Shortcuts from "../components/shortcuts/Shortcuts";
import { Context } from "../context";



function HomePlayer(props) {

  const {state,dispatch} = useContext(Context);
  

  return (
    <>
      <div style={{paddingBottom:"150px"}} className="flex space-x-8">
        <div className="w-full">
          <span className="text-xs opacity-30">What's hot</span>
           <div className="flex justify-between items-end"> 
              <div className="w-full"> <h1 className="text-3xl">Trending</h1> </div>
              <NmBtn variant={"text"} label="More" />
            </div>
            <div className="mt-4 mb-9">
              <div className="relative flex flex-col rounded-lg shadow-lg overflow-hidden">
                  <div className="flex-shrink-0">
                    <img style={{height:"370px"}} className="w-full object-cover" src={"https://i.ytimg.com/vi/kfZpxEJfnfk/hqdefault.jpg"} alt="" />
                  </div>
                  <div className="flex-1 w-full absolute bottom-0 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium">
                         Artist
                      </p>
                      <h1 className="block mt-2 text-7xl">
                        Born With Horns?
                      </h1>
                    </div>
                    <div className="mt-6 flex items-center space-x-2">
                      <div className="flex-shrink-0">
                        <NmBtn label="Play" />
                      </div>
                      <div>
                        <NmBtn label="Follow" variant={"outline"} />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <h1 className="text-3xl">My Playlist</h1>
            <div className="mt-8 flex flex-col">
              <div className="-my-2 overflow-x-auto -mx-6">
                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="">
                        <tr>
                          <th scope="col" className="relative py-3 pl-4 pr-3 sm:pr-6">
                            <span className="">#</span>
                          </th>
                          <th
                            scope="col"
                            className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide  sm:pl-6"
                          >
                            Artist
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Title
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Time
                          </th>
                          <th
                            scope="col"
                            className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide "
                          >
                            Album
                          </th>
                        
                        </tr>
                      </thead>
                      <tbody >
                        {Songs.map((song,index) => (
                          <tr className="song-list-table" key={song.id}>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center m-auto text-sm font-medium ">
                              <>
                                <PlayIcon
                                  onClick={() => dispatch({type:"CHANGE_SONG", payload:song})}
                                className="cursor-pointer h-5 mx-auto play-song-icon"
                                  />
                                <span className="play-song-incr-number">{index+1}</span>
                              </>
                            </td>
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium ">
                              <>
                                {song.artist}
                              </>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.title}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.time}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm ">{song.album}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div style={{minWidth:"300px", maxWidth:"300px"}}>            
              <Shortcuts />                
              <FavArtists />
              <RandomCardArtist />
        </div>
      </div>
    </>
  );
}
export default HomePlayer;
