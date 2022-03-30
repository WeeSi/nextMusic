/* eslint-disable @next/next/no-img-element */
import { DotsHorizontalIcon, PlayIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import FavArtists from "../components/favartists/FavArtists";
import Playlist from "../components/playlist/Playlist";
import RandomCardArtist from "../components/randomCardArtist/RandomCardArtist";
import Shortcuts from "../components/shortcuts/Shortcuts";
import Trending from "../components/trending/trending";
import { Context } from "../context";



function HomePlayer(props) {

  const {state,dispatch} = useContext(Context);
  

  return (
    <>
      <div style={{paddingBottom:"150px"}} className="flex space-x-8">
        <div className="w-full">
          <Trending />
          <Playlist />
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
