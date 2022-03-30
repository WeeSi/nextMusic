import { Songs } from "../components/player/songs";

const backgroundImageURL =
      "https://e-cdns-images.dzcdn.net/images/playlist/035a9995c78b31f04093dcfeea605e81/264x264-000000-80-0-0.jpg";
    const containerStyle = {
      backgroundImage:
        `url(${backgroundImageURL})`,
    };


    
        

const Bibliotheque = () => {

  return (
<div>
 <div className="w-full">
        <div className="grid grid-cols-4 gap-6">

    {Songs.map((song) => (
       <div key={song.id}> {

        <div className="rounded">
        <div style={containerStyle} className="w-full h-64 flex flex-col justify-between  rounded-lg mb-6 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg"  width={80} height={260} viewBox="-2 -28 25 20" strokeWidth="1.5" stroke="white" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"  />
            </svg>
        </div>   
      </div>
       } 
       </div>
    ))}
</div>
</div>
</div>

  )
}

export default Bibliotheque;