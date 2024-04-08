import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
      <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
        <input 
          type="text" 
          placeholder="Serch for products..." 
          className='bg-transparent focus:outline-none w-80 sm:64'
        />
        <FaSearch className='text-slatec-600' />
      </form>    
    </div>
  )
}
