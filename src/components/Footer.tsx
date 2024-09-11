import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex justify-around mt-9   '>
      <div className='space-y-2'>
        <div className='text-white font-bold text-2xl'>Music</div>
        <div>Address</div>
        <div>Contectus</div>
      </div>
      <div className='space-y-2' >
        <div  className='text-white font-bold text-2xl '>Songs</div>
        <div>Gujrati-Song</div>
        <div>Hindi-Song</div>
        <div>English-Song</div>
      </div>
      <div className='space-y-2' >
          <div  className='text-white font-bold text-3xl' >Music-Indestry</div>
      </div>
      
    </div>
    <div className='text-center mt-7 h-[80px]' >@copyRight-to-musicindestory </div>
    </>
  )
}

export default Footer