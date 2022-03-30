import React from 'react'
const Tags = [
    { name: 'Chill Hits', icon :'/images/cold.png' },
    { name: 'Pop', icon :'/images/star.png' },
    { name: 'Hop', icon :'/images/musical-note.png' },
    { name: 'Accoustic', icon :'/images/guitar.png' },
    { name: 'Indie Pop', icon :'/images/music.png' },
    { name: 'Piano Blues', icon :'/images/keyboard.png' },
    { name: 'Jazz', icon :'/images/saxophone.png' },
  ]
const Shortcuts = () => {
  return (
    <div>
        <h1 className="font-bold">Shortcuts</h1>
        <div className="space-y-2 mt-2">
            {Tags.map((item) => {
            return (  
                <span key={item.name} style={{backgroundColor:"var(--theme-podcast-player)"}} className="shadow-md mr-2 cursor-pointer inline-flex items-center px-4 py-2 rounded-full text-xs font-medium">
                   {item.icon && <img className='w-4 mr-2' src={item.icon} />} 
                    <span>{item.name}</span>
                </span>
            )
            })}
        </div>
    </div>
  )
}

export default Shortcuts