import { Link } from 'react-router-dom'

const NotFounds = () => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-screen">
        <div className="text-center">
            <p className="text-base font-semibold text-mycolor">404</p>
            <h1 className="mt-4 text-3xl tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl">لم يتم العثور على الصفحة</h1>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">عذرًا، لم نتمكن من العثور على الصفحة التي تبحث عنها</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link to={"/"} className="rounded-full font-bold bg-mycolor w-1/2 py-3 text-sm text-white shadow-sm hover:bg-mycolorhover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mycolor">العودة إلى المنزل</Link>
            </div>
        </div>
    </main>
  )
}

export default NotFounds