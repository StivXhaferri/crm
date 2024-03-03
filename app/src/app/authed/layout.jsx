import React from 'react'
import Sidebar from '@/components/ui/Sidebar';
import Navbar from '@/components/ui/Navbar';


const layout = ({children}) => {
    return(
        <div className='w-full flex '>
            <div className='w-[20%]'>
                <Sidebar/>
            </div>
            <div className='w-[80%] '>
                <Navbar/>
            {children}
            </div>
            
            </div>
    )
}


export default layout;