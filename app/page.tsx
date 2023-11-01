import Image from 'next/image'
import Link from 'next/link'
import icon from './icon.png'
import { WInformation } from '@/components/bundeslander/winformation'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <div className='flex justify-center pt-20'>
        <div className='xl:w-8/12 sm:w-10/12'>
          <div className='flex justify-left '>

            <Image alt='Not today' src={icon} className=' w-10  ' />
            <p className='pl-2   text-2xl'><strong>Corona-Statistic: Текущая статистика по COVID-19 </strong> </p>
            
            
          </div>
          <p className='pl-2 text-4xl'>Чимаев Андрей, ВСОШ, МОУ 'Гимназия 3 №2 г. Раменское'.</p>
          <p className='pl-2 text-4xl'> С наилучшими пожеланиями</p>
          <p className='text-lg pt-4'>
          Corona-Statistic предлагает быстрый и актуальный обзор статистики случаев заболевания короновирусом во всем мире и в Германии, вплоть до отдельных городов и районов. Ежедневно обновляется.
          </p>
          <hr className='my-4'></hr>

          <p className='text-sm pb-2'> Использованные данные были собраны Институтом Роберта Коха (RKI), Университетом Джона Хопкинса (JHU), Всемирной организацией здравоохранения (ВОЗ) и организацией "Наш мир в данных" (OWID)..</p>
        </div>

      </div>
      
      
      <div className='flex justify-center pt-16'>
        <div className='xl:w-8/12 sm:w-10/12'>

          <div className='grid xl:grid-cols-2 sm:grid-cols-1'>
            <div className='xl:col-start-1 xl:col-end-1 sm:col-start-1 sm:col-end-1  '>
              <strong>  <p className='text-xl'>Германия</p></strong>
              <p className='text-sm pt-1 pb-3'>Здесь вы найдете основные показатели по всем 16 федеральным землям Германии. </p>
              <Link href='/bundeslander'>  <button className='  text-xs text-center rounded  w-40 h-8 bg-blue-500 hover:bg-blue-700 text-white'>Статистика по Германии </button></Link> 
            </div>
            <div className='xl:col-start-2 xl:col-end-2 xl:pl-10 sm:col-start-1 sm:col-end-1 '  >
              <strong>   <p className='text-xl sm:pt-4 '>Земли</p></strong>
              <p className='text-sm pt-1 pb-3' >Здесь вы найдете основные показатели по более чем 400 городам и районам.</p>
              <Link href='/state-statistic'>  <button className='   text-xs text-center rounded  w-44 h-8 bg-blue-500 hover:bg-blue-700 text-white'>Cтатистика по федеральным землям</button> </Link>
            </div>
          </div>
        </div>
      </div>

      <hr className='my-4'></hr>
    <div className='flex justify-center'>
      <div className="xl:w-8/12 sm:w-10/12">
      <div className='flex justify-left'>
      <strong><h2 className='pb-7 sm:text-xl'>Дополнительная информация </h2></strong>
      <hr className='my-4'></hr>
      </div>
      <WInformation/>
      </div>
      </div>
    </>
  )
}
