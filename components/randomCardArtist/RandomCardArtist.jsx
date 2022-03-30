import React from 'react'

const RandomCardArtist = () => {
  return (
    <div className='mt-9'>
        <div style={{backgroundColor:"var(--theme-podcast-player)"}} className='p-4 rounded-lg'>
            <div className="flex-shrink-0 cursor-pointer">
                <img className="rounded-lg h-56 w-full object-cover" src={"https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/08/fdcd5a_4202da4365114b3696e7d1b1a19e98e3mv2-1.jpeg?fit=1000%2C988&ssl=1"} alt="" />
            </div>

            <div className='mt-6'>
                <div><h2>Knife Talk</h2></div>
                <div><span className='text-xs'>Drake ft 21 savage</span></div>
            </div>
        </div>
    </div>
  )
}

export default RandomCardArtist