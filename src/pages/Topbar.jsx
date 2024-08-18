import { useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import NotFounds from './NotFound';
import Index from './Home/Index';
import { 
  BookOpen,
  Sun,
  Moon,
  AlignRight,
} from 'lucide-react';
import Study from './Studies/Study';
import Activity from './Activities/Activity';
import Dialogue from './Dialogues/Dialogue';
import Publication from './Publications/Publication';

const Topbar = () => {
  const [changeHeader, setChangeHeader] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const onChangeHeader = () => {
    if (window.scrollY >= 50) {
      setChangeHeader(true);
    } else {
      setChangeHeader(false);
    }
  };
  window.addEventListener('scroll', onChangeHeader);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div>
      <header
        className={
          changeHeader
            ? 'bg-white dark:bg-slate-900 fixed z-50 top-0 left-0 w-full shadow-md transition duration-500'
            : 'bg-transparent fixed z-50 top-0 left-0 w-full transition duration-500'
        }
      >
        {/* Web Top bar */}
        <div className='hidden md:block'>
          <nav className='flex justify-between items-center p-4'>
            <div>
              <Link to={'/'} className='font-bold text-xl dark:text-white text-black'>
                <BookOpen size={30} />
              </Link>
            </div>
            <div className='flex justify-center items-center space-x-6'>
              <Link to={'/الأنشطة'} className='font-semibold'>الأنشطة</Link>
              <Link to={'/الحوارات'} className='font-semibold'>الحوارات</Link>
              <Link to={'/المنشورات'} className='font-semibold'>المنشورات</Link>
              <Link to={'/الدراسات'} className='font-semibold'>الدراسات</Link>
            </div>
            <div className='space-x-2 inline-flex'>
              {theme === 'dark' ? (
                <button onClick={() => toggleTheme('light')} className='border-2 border-slate-600 p-1.5 rounded-full'>
                  <Sun />
                </button>
              ) : (
                <button onClick={() => toggleTheme('dark')} className='border-2 border-slate-100 p-1.5 rounded-full'>
                  <Moon />
                </button>
              )}
              <button className='bg-mycolor hover:bg-mycolorhover text-sm text-white font-bold py-1.5 px-6 rounded-full'>انضم إلينا</button>
            </div>
          </nav>
        </div>

        {/* Mobile Top Bar */}
        <div className='md:hidden block'>
          <nav className='flex justify-between items-center p-4 z-10'>
            <div>
              <Link onClick={closeSidebar} to={'/'} className='font-bold text-xl dark:text-white text-black'>
                <BookOpen size={30} />
              </Link>
            </div>
            <div className='space-x-2 inline-flex'>
              {theme === 'dark' ? (
                <button onClick={() => toggleTheme('light')} className='border-2 border-slate-600 p-1.5 rounded-full'>
                  <Sun />
                </button>
              ) : (
                <button onClick={() => toggleTheme('dark')} className='border-2 border-slate-100 p-1.5 rounded-full'>
                  <Moon />
                </button>
              )}
              <button onClick={() => setSidebarOpen(!sidebarOpen)} className='border-2 border-slate-100 dark:border-slate-600 p-1.5 rounded-full'>
                <AlignRight />
              </button>
            </div>
          </nav>

          {sidebarOpen && (
            <div className='md:hidden block bg-white dark:bg-slate-900 h-screen z-50'>
              <div className='flex flex-col justify-center items-center space-y-4'>
                <Link to={'/الأنشطة'} className='font-semibold' onClick={closeSidebar}>الأنشطة</Link>
                <Link to={'/الحوارات'} className='font-semibold' onClick={closeSidebar}>الحوارات</Link>
                <Link to={'/المنشورات'} className='font-semibold' onClick={closeSidebar}>المنشورات</Link>
                <Link to={'/الدراسات'} className='font-semibold' onClick={closeSidebar}>الدراسات</Link>
                <button className='bg-mycolor hover:bg-mycolorhover text-sm text-white font-bold py-1.5 px-6 rounded-full'>انضم إلينا</button>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className='mt-16 md:mt-0 lg:mt-16'>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/الدراسات' element={<Study />} />
          <Route path='/الأنشطة' element={<Activity />} />
          <Route path='/الحوارات' element={<Dialogue />} />
          <Route path='/المنشورات' element={<Publication />} />
          <Route path='*' element={<NotFounds />} />
        </Routes>
      </div>
    </div>
  );
};

export default Topbar;