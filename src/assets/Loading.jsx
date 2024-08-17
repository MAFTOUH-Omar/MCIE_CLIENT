import { helix } from 'ldrs'
import { useEffect, useState } from 'react';
helix.register()

const Loading = () => {
    document.title = 'loading...'
    const [helixColor, setHelixColor] = useState();
    useEffect(() => {
        const rootStyles = getComputedStyle(document.documentElement);
        const mycolor = rootStyles.getPropertyValue('--mycolor').trim();
        setHelixColor(mycolor);
    }, []);
    return (
        <div className='fixed top-0 left-0 w-full h-full z-50 backdrop-sm bg-slate-50 dark:bg-slate-900 flex items-center justify-center'>            
           <span className='flex justify-center items-center text-mycolor'>
                <l-helix
                    size="45"
                    speed="2.5" 
                    color={helixColor}
                ></l-helix>
            </span>
        </div>
    )
}

export default Loading