import React from 'react'

const HomeButtons = () => {
    const defaultStyle = 'p-4 rounded-lg text-black min-w-48 text-xl'
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      <button className={`${defaultStyle} bg-btn text-white`} >Learn More</button>
      <button className={`${defaultStyle} bg-white`}>Contact</button>
    </div>
  );
}

export default HomeButtons