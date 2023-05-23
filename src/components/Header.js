import React from 'react';
// imagess
import Logo from '../assets/logokes1.png';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center text-center h-[30px]'>
        {/* logo */}
        <a href='#'>
          <img className='w-[220px] rounded-[20%]' src={Logo} alt='' />
        </a>
        {/* button */}
        <button className='btn btn-sm'> Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
