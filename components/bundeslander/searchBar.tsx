'use client'
import { useContext } from 'react';
import { Context } from '@/app/ClientContext';
import Image from 'next/image';
import lupa from './lupa.png'
export function SearchBar({
  }) {
    let context = useContext(Context);
    return (
      <div className='flex justify-left'>
      <form>
        <input 
          type="text" 
          value={context?.filterText} placeholder="Search..." 
          onChange={(e) => context?.setFilterText(e.target.value)} />
      </form>
      
      </div>
      
    );
  }