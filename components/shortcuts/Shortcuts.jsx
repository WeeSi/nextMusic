import React from 'react'
const Tags = [
    { name: 'Chill Hits', icon :'' },
    { name: 'Pop', icon :'' },
    { name: 'Hop', icon :'' },
    { name: 'Accoustic', icon :'' },
    { name: 'Indie Pop', icon :'' },
    { name: 'Piano Blues', icon :'' },
    { name: 'Jazz', icon :'' },
  ]
const Shortcuts = () => {
  return (
    <div>
        <h1>Shortcuts</h1>
        <div className="space-y-2 mt-2">
            {Tags.map((item) => {
            return (  <span key={item.name} className="mr-2 cursor-pointer inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {item.name}
            </span>)
            })}
        </div>
    </div>
  )
}

export default Shortcuts