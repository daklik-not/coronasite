'use client'
import { useContext } from 'react';
import { Context } from '@/app/ClientContext';
import { StatisticContext } from '@/app/state-statistic/statisticContext';



export function SearchBarLand({
  
  }) {
    const context1 = useContext(StatisticContext);
    function handleChange(){
        return(
          context1?.setTable(0)
        )
    }
    return (
      <div className='flex justify-left '>
      <form >
        <input 
          type="text" 
          value={context1?.filterText} placeholder="Search..." 
          onChange={(e) => {handleChange();context1?.setFilterText(e.target.value)}}
           />
          
      </form>
      
      </div>
      
    );3
  }