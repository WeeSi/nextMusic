import { DotsHorizontalIcon } from "@heroicons/react/solid";

const favArtists = [
    {
      name: 'Taylord Swift',
      desc:'196 songs in library',
      image:
        'https://images.rtl.fr/~c/770v513/rtl/www/1364486-la-chanteuse-taylor-swift.jpg',
    },
    {
      name: 'Kanye West',
      desc:'124 songs in library',
      image:
        'https://img.huffingtonpost.com/asset/623b2ebd1e0000d33c1b0e23.jpeg?ops=scalefit_630_noupscale',
    },
    {
      name: 'Drake',
      desc:'50 songs in library',
      image:
        'https://img.lemde.fr/2021/12/07/0/0/3544/2307/664/0/75/0/c16eba2_5148822-01-06.jpg',
    },
    {
      name: 'Billie Elish',
      desc:'15 songs in library',
      image:
        'https://i2.wp.com/www.starmag.com/wp-content/uploads/2021/05/billie-eilish-metamorphosee-en-lingerie-pour-un-prestigieux-magazine-de-mode.jpg?resize=600%2C460&ssl=1',
    },
  ]
  
const FavArtists = () => {
  return (
    <div className="mt-9">
    <h1>Fav Artist</h1>
    <ul role="list" className="mt-2 space-y-4">
       {favArtists.map((artist) => (
         <li key={artist.name} className="flex items-center">
           <img className="object-cover h-10 w-10 rounded-full" src={artist.image} alt="" />
           <div className="ml-3 flex items-center justify-between w-full">
             <div >
               <p className="text-sm font-medium text-white">{artist.name}</p>
               <p className="text-xs text-white opacity-40">{artist.desc}</p>
             </div>
             <DotsHorizontalIcon className="h-5 cursor-pointer" />
           </div>

         </li>
       ))}
   </ul>
  </div> 
  )
}

export default FavArtists;