import { FaSearch } from 'react-icons/fa';
import { LuUser } from "react-icons/lu";
import { BsCart3 } from "react-icons/bs";
import CartCountBadge from './CartCountBadge';
import React from 'react';

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white z-10">
        <div className="container hidden lg:block"></div>
            <div className="flex justify-between items-center p-8">
                <h1 className="text-4xl font-medium">Logo</h1>
                <div className='relative w-full max-w-[500px]'>
                    <input
                        className='bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full'
                        type='text'
                        placeholder='Search Product...'
                    />
                    <FaSearch 
                        className='absoluta top-0 right-0 mt-4 mr-5 text-gray-500'
                        size={20}
                    />
                </div>
                <div className="flex gap-4">
                    <div className="icon_wrapper">
                    <LuUser />
                    </div>
                </div>
                
                    <div className="icon_wrapper relative">
                        <BsCart3 />
                        <CartCountBadge size={''} />
                    </div>
                


            </div>
        </div>
  );
}; 

export default Navbar;