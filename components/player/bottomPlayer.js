import React, { useState, useEffect, useRef, useContext } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  ViewListIcon,
  VolumeOffIcon,
  VolumeUpIcon,
  XIcon,
} from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";
import { MusicNote } from "@mui/icons-material";
import { Context } from "../../context";
import { Songs } from "./songs";

const BottomPlayer = (props) => {
    const  {state, dispatch} = useContext(Context);
    const root = document.getElementsByTagName('body')[0];
    const [statevolum, setStateVolum] = useState(state.volume);
    const [dur, setDur] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [inplay, setInplay] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [disableNext, setDisableNext] = useState(true);
    const [disablePrev, setDisablePrev] = useState(true);
    const [nextPlaySong, setNextPlaySong] = useState({});
    const [prevPLaySong, setPrevPlaySong] = useState({});
    const [index, setIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const audio = useRef();
    const animationRef = useRef();
    const progressBar = useRef();
    const volume = useRef();

    useEffect(() => {
        audio.current.volume = parseFloat(state.volume || 0);
    
        let currentSong = Songs.findIndex((song) => song.id == state.inPlay.id);
        
        if (typeof currentSong != "undefined") var currentIndex = currentSong;
        else currentIndex = index;

        console.log(index,currentIndex)
    
        if (currentIndex !== index) {
          setIsPlaying(true);
          audio.current.pause();
          audio.current.load();
          audio.current.play();
          whilePlaying();
          setInplay(state.inPlay);
          setIndex(currentIndex);
        }
    
        if (Songs.length > 0) {
          let nextSong = Songs[currentIndex+1];
          let prevSong = Songs[currentIndex-1];

          if (!nextSong) nextSong = undefined;
          if(!prevSong) prevSong=undefined;
    
          if (typeof nextSong != "undefined") {
            setDisableNext(false);
            setNextPlaySong(nextSong);
          } else {
            setDisableNext(true);
          }

          if (typeof prevSong != "undefined") {
            setDisablePrev(false);
            setPrevPlaySong(prevSong);
          } else {
            setDisablePrev(true);
          }

        }

        setIndex(currentIndex)
        
        root.style.setProperty('--primary', `${state.inPlay.filter}`);
        return volume?.current?.style.setProperty(
          "--seek-before-width",
          `${statevolum * 100}%`
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [state.inPlay]);


      const fmtMSS = (s) => {
        const sec = parseInt(s, 10); // convert value to number if it's string
        let hours = Math.floor(sec / 3600); // get hours
        let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
        let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
        // add 0 if value < 10; Example: 2 => 02
        if (hours < 10) {
          hours = "0" + hours;
        }
        if (minutes < 10) {
          minutes = "0" + minutes;
        }
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        return hours + ":" + minutes + ":" + seconds;
      };
    
      const handleProgress = (e) => {
        let compute = (e.target.value * dur) / 100;
        setCurrentTime(compute);
        audio.current.currentTime = compute;
        return progressBar?.current?.style.setProperty(
          "--seek-before-width",
          `${progressBar.current.value}%`
        );
      };
    
      const handleVolume = (q) => {
        setStateVolum(q);
        dispatch({type : "CHANGE_VOLUME", payload:q})
        audio.current.volume = q;
        return volume?.current?.style.setProperty(
          "--seek-before-width",
          `${volume.current.value}%`
        );
      };
    
      const disableVolume = () => {
        setStateVolum(0);
        dispatch({type : "CHANGE_VOLUME", payload:0})
        audio.current.volume = 0;
        return volume?.current?.style.setProperty("--seek-before-width", `${0}%`);
      };
    
      const activeVolume = () => {
        setStateVolum(0.2);
        audio.current.volume = 0.2;
        dispatch({type : "CHANGE_VOLUME", payload:0.2})
        return volume?.current?.style.setProperty("--seek-before-width", `${20}%`);
      };
    
      const toggleAudio = () => {
        if(state.inPlay.id){
          const prevValue = isPlaying;
          setIsPlaying(!prevValue);
      
          if (!prevValue) {
            audio.current.play();
            animationRef.current = requestAnimationFrame(whilePlaying);
          } else {
            audio.current.pause();
            cancelAnimationFrame(animationRef.current);
          }
        }else{
          dispatch({type : "CHANGE_SONG", payload:Songs[0]})
        }
        
      };
    
      const whilePlaying = () => {
          animationRef.current = requestAnimationFrame(whilePlaying);
          changePlayerCurrentTime();
      };
    
      const changePlayerCurrentTime = () => {
          return progressBar?.current?.style.setProperty(
            "--seek-before-width",
            `${progressBar.current.value}%`
          );
      };
    
      const prevSong = () => {
        if (!disablePrev) {
            console.log(prevPLaySong);
          dispatch({type:"CHANGE_SONG", payload:prevPLaySong})
          setInplay(prevPLaySong);
          return audio?.current?.style.setProperty("--seek-before-width", `${0}%`);
        }
      };
    
      const nextSong = () => {
        if (!disableNext) {
          dispatch({type:"CHANGE_SONG", payload:nextPlaySong})
          setInplay(nextPlaySong);
          return audio?.current?.style.setProperty("--seek-before-width", `${0}%`);
        }
      };
    
      const onToggle = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div
          style={{
            zIndex: "999999",
            transition: "all 0.3s ease 0s",
            maxWidth:"660px"
          }}
          className="mx-auto fixed bottom-0 inset-x-0 pb-2 sm:pb-5"
        >
          <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
            <div
              style={{ zIndex: "2" }}
              className="podcast-player relative shadow px-5 py-3 rounded-lg shadow-lg"
            >
              <div className="flex items-center justify-between flex-wrap">
                <div className="w-full">
                  <div className="flex items-center space-x-4">
                    {state.inPlay.id && (
                      <>
                        <div>
                          <img
                            src={state.inPlay?.image}
                            alt=""
                            width="30"
                            height="30"
                            className="object-cover flex-none w-10 h-10 rounded-full"
                          />
                        </div>
                        <div>
                          <div
                            className={`${
                              state.inPlay.title.length > 40 ? "marquee" : ""
                            }`}
                          >
                            <p className="bold text text-sm">{ state.inPlay.title}</p>
                          </div>
                          <p className="text text-xs">{ state.inPlay.artist}</p>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="">

                  <div className="flex-auto flex items-center">
                      <div className="flex-auto flex items-center justify-start">
                        <HeartIcon className="h-5" />
                        <MusicNote className="h-5" />
                      </div>
                    <div className="flex items-center justify-center">
                    <button onClick={() => prevSong()} disabled={disablePrev}>
                        <ChevronLeftIcon className="text h-5" />
                      </button>
                        <button
                            style={{
                            background: state.inPlay.filter || 'var(--primary)',
                            padding:"15px"
                            }}
                            className="justify-center flex rounded-full"
                            onClick={toggleAudio}
                        >
                        {audio?.current?.paused && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path d="M3 22v-20l18 10-18 10z" />
                          </svg>
                        )}
                        {!audio?.current?.paused && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                          >
                            <path d="M10 24h-6v-24h6v24zm10-24h-6v24h6v-24z" />
                          </svg>
                        )}
                      </button>
                      <button onClick={() => nextSong()} disabled={disableNext}>
                        <ChevronRightIcon className="text h-5" />
                      </button>
                    </div>

                    <div className="flex-auto flex items-center justify-end">
    
                      {statevolum === 0 && (
                        <button onClick={activeVolume}>
                          <VolumeOffIcon className="text h-5" />
                        </button>
                      )}
    
                      {statevolum > 0 && (
                        <button onClick={disableVolume}>
                          <VolumeUpIcon className="text h-5" />
                        </button>
                      )}
    
                      <input
                        className="volumeProgress"
                        ref={volume}
                        value={Math.round(statevolum * 100)}
                        type="range"
                        name="volBar"
                        id="volBar"
                        onChange={(e) => handleVolume(e.target.value / 100)}
                        style={{width:"50px"}}
                      />
                    </div>

                    </div>

   
    
                    <div className="mt-4 w-full flex items-center space-x-3">
                      <span
                        className="text text-center text-xs currentT"
                      >
                        {fmtMSS(currentTime)}
                      </span>
                      <input
                        ref={progressBar}
                        onChange={handleProgress}
                        value={dur ? (currentTime * 100) / dur : 0}
                        type="range"
                        name="progresBar"
                        className="progressBar"
                        id="prgbar"
                      />
                      <span
                        style={{ minWidth: "40px" }}
                        className="text text-center text-xs totalT"
                      >
                        {fmtMSS(dur)}
                      </span>
                    </div>
    
                    <div className=" hidden font-medium text">
                      <audio
                        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                        onCanPlay={(e) => setDur(e.target.duration)}
                        onEnded={() => nextSong()}
                        ref={audio}
                        controls
                      >
                        <source src={state.inPlay?.src}  type='audio/mpeg'/>
                      </audio>
                    </div>
    
                   
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };

export default BottomPlayer;