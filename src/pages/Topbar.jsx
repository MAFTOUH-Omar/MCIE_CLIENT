import { useContext, useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { Sun , Moon } from 'lucide-react';
import NotFounds from './NotFound';

const Topbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const { theme , toggleTheme } = useContext(ThemeContext)
  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else setChangeHeader(false);
  };
  window.addEventListener('scroll', onChangeHeader);
  return (
    <div>
      <header
        className={
          changeHeader
          ? 'bg-white dark:bg-slate-900 fixed z-50 top-0 left-0 w-full shadow-md transition duration-500'
          : 'bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500'
        }
      >
        <nav className='flex justify-between items-center mx-auto px-10 py-4'>
          <div>
            <Link to={'/'} className='font-bold text-xl dark:text-white text-black'>
              {import.meta.env.VITE_APP_NAME}
            </Link>
          </div>
          <div className='space-x-4'>
            <Link to={'/الأنشطة'} className='mx-4 text-lg font-semibold'>الأنشطة</Link>
            <Link to={'/المقالات'} className='mx-4 text-lg font-semibold'>المقالات</Link>
            <Link to={'/الحوارات'} className='mx-4 text-lg font-semibold'>الحوارات</Link>
            <Link to={'/المنشورات'} className='mx-4 text-lg font-semibold'>المنشورات</Link>
            <Link to={'/الندوات'} className='mx-4 text-lg font-semibold'>الندوات</Link>
            <Link to={'/الدراسات'} className='mx-4 text-lg font-semibold'>الدراسات</Link>
          </div>
          <div className='space-x-4'>
            {theme == 'dark' ? (
              <button onClick={()=>{toggleTheme('light')}}>
                <Sun />
              </button>
            ) :(
              <button onClick={()=>{toggleTheme('dark')}}>
                <Moon />
              </button>
            )
            }
          </div>
        </nav>
      </header>
      <div className='mt-16 md:mt-0 lg:mt-16'>
        <Routes>
          <Route path='*' element={<NotFounds />} />
        </Routes>
        </div>
    </div>
  )
}

export default Topbar