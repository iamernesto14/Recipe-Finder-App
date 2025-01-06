import React from 'react'

function Footer() {
  return (
    <div className='text-sm mx-5 pb-20 pt-10'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col items-start gap'>
            <p>Design & Development</p>
            <p>Ernest Anokye</p>
        </div>
        <div className='flex flex-col items-start gap'>
            <p>Based in</p>
            <p>Ghana</p>
        </div>
      </div>
      <p className='text-center mt-4'>All Right Reserved &copy; 2025</p>
    </div>
  )
}

export default Footer
