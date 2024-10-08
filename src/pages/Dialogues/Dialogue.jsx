import axios from 'axios';
import { useEffect, useState } from 'react'
import Loading from '../../assets/Loading';
import "../../style/activity.css"
import "../../style/hero.css"

const Dialogue = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(false)

    const fetchData = async ( order = 'recent') => {
        try {
            setLoading(true)
            const response = await axios.get(import.meta.env.VITE_API_PATH + `/dialog?sort=${order}`);
            if ( response.data ) {
                setData(response.data)
            }
        } catch (error) {
            console.error('Error : ' , error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData()
    } , [])

    if ( loading ) {
        return <Loading />;
    }
  return (
    <div className='flex md:mx-20 md:mt-28 flex-col'>
        <div className="main"></div>
        <div className='flex md:justify-end md:items-end justify-center items-center w-full flex-col'>
            <h1 className='text-xl font-bold title'>صفحة الحوارات</h1>
            <p className='text-slate-500 dark:text-slate-400'>تستعرض أحدث الحوارات في مختلف المجالات</p>
        </div>
        <div className='flex md:justify-end md:items-end justify-center items-center w-full mt-2 space-x-2'>
            <button onClick={()=>{fetchData('recent')}}  className='bg-mycolor text-white px-4 py-0.5 flex justify-center items-center rounded-lg font-bold text-sm'>جديد</button>
            <button onClick={()=>{fetchData('older')}} className='bg-mycolor text-white px-4 py-0.5 flex justify-center items-center rounded-lg font-bold text-sm'>قديم</button>
            <span className='text-sm font-bold'>: تصفية حسب</span>
        </div>
        {/* WEB VIEW */}
        <div className='mt-5 hidden md:block'>
            {data?.map(stydy=>(
                <div key={stydy._id} className='border-2 border-slate-200 rounded-lg my-2 shadow-lg hover:scale-105 transition-all cursor-pointer'>
                    <div className='flex'>
                        <div className='flex-1 flex-col p-4'>
                            <h1 className='font-bold text-lg text-end'>{stydy.title}</h1>
                            <p className='text-end text-slate-500 dark:text-slate-400'>{stydy.content}</p>
                            <p className='text-end text-sm text-slate-500 dark:text-slate-400'>تم إنشاؤه في : {stydy.created_at.split('T')[0]}</p>
                            <button className='mt-10 bg-mycolor hover:bg-mycolorhover text-white font-bold text-sm w-1/4 py-2 rounded-lg'>اقرأ المزيد</button>
                        </div>
                        <div className='w-1/3'>
                            <img
                                src={`${import.meta.env.VITE_API_PATH}/image/${stydy.image}`}
                                className="w-full h-48 object-cover"
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
        {/* MOBILE VIEW */}
        <div className='mt-5 mx-2 md:hidden block'>
            {data?.map(stydy=>(
                <div key={stydy._id} className='border-2 border-slate-200 rounded-lg my-2 shadow-lg hover:bg-slate-50 dark:hover:bg-slate-950 transition-all cursor-pointer'>
                    <div className='flex'>
                        <div className='flex-1 flex-col'>
                            <img
                                src={`${import.meta.env.VITE_API_PATH}/image/${stydy.image}`}
                                className="w-full h-48 object-cover"
                            />
                            <div className='p-4'>
                                <h1 className='font-bold text-lg text-end'>{stydy.title}</h1>
                                <p className='text-end text-slate-500 dark:text-slate-400'>{stydy.content}</p>
                                <p className='text-end text-sm text-slate-500 dark:text-slate-400'>تم إنشاؤه في : {stydy.created_at.split('T')[0]}</p>
                                <button className='mt-10 bg-mycolor hover:bg-mycolorhover text-white font-bold text-sm w-1/4 py-2 rounded-lg'>اقرأ المزيد</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Dialogue