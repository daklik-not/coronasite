'use client'

import { useState } from "react"

export function WInformation(){
    const [state,setState] = useState(0)
    let jsx= 
    <div>
    <strong><h3 className="pb-2">Общие сведения о COVID-19</h3></strong>
    <p> Коронавирусы были впервые идентифицированы в середине 1960-х годов. Они могут заражать как людей, так и различных животных. SARS-CoV-2 - официальное название нового коронавируса, а COVID-19 - официальное название заболевания, вызванного новым коронавирусом..</p>
    
    <strong><h3 className="pb-2 pt-4">Часто задаваемые вопросы</h3></strong>
    <p>
    Ответы на часто задаваемые вопросы о коронавирусе составляются, например, Федеральным министерством здравоохранения.
    </p>
   
    </div>

    if (state===0){
        jsx=     <div>
        <strong><h3 className="pb-2">Общие сведения о COVID-19</h3></strong>
        <p> Коронавирусы были впервые идентифицированы в середине 1960-х годов. Они могут заражать как людей, так и различных животных. SARS-CoV-2 - официальное название нового коронавируса, а COVID-19 - официальное название заболевания, вызванного новым коронавирусом..</p>
        
        <strong><h3 className="pb-2 pt-4">Часто задаваемые вопросы</h3></strong>
        <p>
        Ответы на часто задаваемые вопросы о коронавирусе составляются, например, Федеральным министерством здравоохранения.
        </p>
       
        </div>
    } else if (state===1){
        jsx=<div>
        <strong><h3 className="pb-2">Данные официальной статистики</h3></strong>
        <p> Целью сайта Corona-Statistic.com является составление быстрого и объективного обзора текущих ключевых показателей COVID-19. Для этого используются официальные источники данны</p>
        
        <strong><h3 className="pb-2 pt-4">Данные по Германии</h3></strong>
        <p>
        Все основные показатели по Германии зарегистрированы Институтом Роберта Коха.
        </p>

        <strong><h3 className="pb-2 pt-4">Основные показатели в мире</h3></strong>
        <p>
        Все глобальные показатели используют наборы данных из Университета Джона Хопкинса, Всемирной организации здравоохранения и агрегированные данные от Our World in Data.
        </p>
        <p>Все источники можно найти в разделе "Источники данных". Вся информация предоставляется без гарантии..</p>
       


        </div>
    } else if (state===2){
        jsx=<div>
    <strong><h3 className="pb-2 ">Поддержка UNICEF</h3></strong>
        <p>
        Corona-in-Zahlen.de поддерживает UNICEF в сборе пожертвований для детей и семей в кризисных районах, которым особенно угрожает коронавирус
        </p>

        <strong><h3 className="pb-2 pt-4">Помогите нам!
</h3></strong>
        <p>
        Если вам нравится Corona-statistic, я буду очень рада небольшому вкладу в мою кампанию по сбору средств для UNICEF. Более подробную информацию о сборе средств вы можете найти здесь. Большое спасибо!
        </p>

        </div>
    }

    let buttons=  <div className="pb-7"> 
    <button onClick={()=>setState(0)}  className='xl:text-xs text-center rounded  w-20 h-8 bg-whiter  text-blazk'>Коронавирус</button>
    <button onClick={()=>setState(1)} className='xl:text-xs text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Данные</button>
    <button onClick={()=>setState(2)} className='xl:text-xs text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Пожертвования</button>
    </div>

    if (state===0){
        buttons=<div className="pb-7"> 
        <button onClick={()=>setState(0)}  className='xl:text-xs  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blazk'>Коронавирус</button>
        <button onClick={()=>setState(1)} className='xl:text-xs sm:pl-10  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Данные</button>
        <button onClick={()=>setState(2)} className='xl:text-xs  sm:pl-10  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Пожертвования</button>
        </div>
    } else if (state===1){
        buttons=<div className="pb-7"> 
        <button onClick={()=>setState(0)}  className='xl:text-xs   sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Коронавирус</button>
        <button onClick={()=>setState(1)} className='xl:text-xs sm:pl-10  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-black'>Данные</button>
        <button onClick={()=>setState(2)} className='xl:text-xs sm:pl-10  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Пожертвования</button>
        </div>
    } else if (state===2){
        buttons=<div className="pb-7"> 
        <button onClick={()=>setState(0)}  className='xl:text-xs  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Коронавирус</button>
        <button onClick={()=>setState(1)} className='xl:text-xs sm:pl-10 sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-blue-600'>Данные</button>
        <button onClick={()=>setState(2)} className='xl:text-xs sm:pl-10  sm:text-lg text-center rounded  w-20 h-8 bg-whiter  text-black'>Пожертвования</button>
        </div>
    }


    return(
        <>
       {buttons}
        {jsx}
        <hr className="my-4"></hr>
        </>
    )

}
