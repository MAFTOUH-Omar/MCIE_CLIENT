import { ChevronRight } from 'lucide-react';
const Hero = () => {
  return (
    <div className="flex justify-center items-center h-[350px] flex-col">
      <div className="my-4">
        <button className="inline-flex shadow-lg py-1 px-4 space-x-2 justify-center items-center rounded-full border-2 border-black dark:border-white hover:scale-105 transition-all">
          <span className="text-sm bg-mycolor hover:bg-mycolorhover font-bold py-1 px-4 text-white flex items-center rounded-full">جديد</span>
          <p className="text-sm font-bold">نضم إلى مجتمع مشاركة الكتب الخاص بنا</p>
          <ChevronRight />
        </button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[40px] font-extrabold hover:tracking-wide transition-all">
          المركز المغربي للاقتصاد التشاركي 
        </h1>
        <p className="mt-4 text-slate-500 dark:text-slate-300">
          مركز مستقل غير ربحي، تأسس سنة 2019، من قبل باحثين في المعاملات الاقتصادية والمالية التشاركية بالمغرب  
        </p>
      </div>
      <div className='mt-4 flex justify-center items-center w-1/2 space-x-2'>
        <button className='bg-gradient-to-r from-mycolor to-mycolorhover rounded-full py-2.5 w-1/3 text-sm font-bold text-white shadow-lg hover:bg-mycolorhover hover:scale-105 transition-all'>انضم الان</button>
        <button className='border-2 border-mycolor py-2.5 w-1/3 rounded-full text-sm font-bold text-mycolor shadow-lg hover:scale-105 transition-all'>النشرات الإخبارية</button>
      </div>

    </div>
  )
}

export default Hero