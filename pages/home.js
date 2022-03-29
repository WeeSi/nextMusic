import { PlayIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { Songs } from "../components/player/songs";
import { Context } from "../context";

const people = [
  { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
  // More people...
]

function HomePlayer(props) {

  const {state,dispatch} = useContext(Context);
  

  return (
    <>
    <h1>My Playlist</h1>
    <div className="mt-8 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-6">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y">
                <thead className="">
                  <tr>
                    <th scope="col" className="relative py-3 pl-4 pr-3 sm:pr-6">
                      <span className="text-gray-500">#</span>
                    </th>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Artist
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Album
                    </th>
                   
                  </tr>
                </thead>
                <tbody >
                  {Songs.map((song,index) => (
                    <tr className="song-list-table" key={song.id}>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-center m-auto text-sm font-medium text-gray-900 ">
                        <>
                          <PlayIcon
                            onClick={() => dispatch({type:"CHANGE_SONG", payload:song})}
                           className="cursor-pointer h-5 mx-auto play-song-icon"
                            />
                          <span className="play-song-incr-number">{index+1}</span>
                        </>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 ">
                        {song.artist}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{song.title}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{song.time}</td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{song.album}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}
export default HomePlayer;
