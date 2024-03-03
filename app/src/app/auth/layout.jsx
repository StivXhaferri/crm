import React from 'react'


const layout = ({children}) => {
    return(
        <div className='w-full flex items-center bg-black'>
            <div className='w-[40%] mx-auto'>
            {children}
            </div>
            
        </div>
    )
}


export default layout