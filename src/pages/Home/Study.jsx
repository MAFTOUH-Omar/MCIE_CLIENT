import{ useEffect, useState } from 'react'
import Loading from '../../assets/Loading'
import axios from 'axios'
import '../../style/activity.css'
import { ExternalLink } from 'lucide-react';

const Study = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(false)

    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(import.meta.env.VITE_API_PATH + '/study');
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
    <div className="overflow-hidden my-6">
        <div className="flex animate-marquee space-x-4">
            {data?.map((activity) => (
                <ActivityCard key={activity._id} activity={activity} />
            ))}

            {data?.map((activity) => (
                <ActivityCard key={`${activity._id}-clone`} activity={activity} />
            ))}
        </div>
    </div>
  )
}

const ActivityCard = ({ activity }) => {
    return (
    <div className="w-[500px] ActivityCard bg-white dark:bg-slate-800 rounded-lg flex-shrink-0 border-2 border-slate-200 dark:border-slate-800">
        <img
            src={`${import.meta.env.VITE_API_PATH}/image/${activity.image}`}
            alt={activity.title}
            className="w-full h-48 object-cover rounded-md ActivityCard"
        />
        <div className='p-4 flex flex-col justify-end items-end'>
            <h2 className="text-xl font-bold mt-4">{activity.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">{activity.description}</p>
        </div>
        <div className='flex justify-between mt-2 px-4 py-2'>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{activity.created_at.split('T')[0]}</p>
                <button className='bg-mycolor hover:bg-mycolorhover text-white rounded-full p-2 flex justify-center items-center'>
                    <ExternalLink />
                </button>
            </div>
    </div>
)};

export default Study