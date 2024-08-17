import Hero from './Hero'
import Activity from './Activity'
import '../../style/hero.css'
import '../../style/activity.css'
import Dialogue from './Dialogue'
import Publications from './Publications'
import Study from './Study'
import Footer from '../Footer/Footer'
const Index = () => {
  return (
    <div>
      <div className="main"></div>
      <Hero />
      {/* Partie01 */}
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl title'>الأنشطة</h1>
      </div>
      <Activity/>
      {/* Partie02 */}
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl title'>الحوارات</h1>
      </div>
      <Dialogue/>
      {/* Partie03 */}
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl title'>المنشورات</h1>
      </div>
      <Publications/>
      {/* Partie04 */}
      <div className='flex justify-center items-center'>
        <h1 className='font-bold text-xl title'>الدراسات</h1>
      </div>
      <Study/>
      <div>
      <Footer/>
      </div>
    </div>
  )
}

export default Index