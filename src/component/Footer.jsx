import React from 'react';

function Footer() {
  return (
    <div className='text-sm mx-5 pb-[104px] md:pb-5 pt-10'>
      <hr className='bg-black mb-3 h-[2px]' />
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
  );
}

export default Footer;
