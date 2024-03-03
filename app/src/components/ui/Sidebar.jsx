import react from 'react'
import Link from 'next/link'


const Sidebar = () => {
  return(
    <div className='bg-[#242424] relative lg:w-full  h-screen '>
      <button className="fixed md:hidden lg:hidden bg-black sm:block p-3 text-white">Open</button>
      <Link href='/authed/feed'>
      <div className='w-full bg-[#2C2C2C] px-3 py-4 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-full flex justify-start'>
          <img src="/meta.png" className='w-[50%] pl-2' alt="" />
        </div>
        
      </div>
      </Link>
      <Link href='/authed/feed'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/1.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Dashboard</h3>
        </div>
      </div>
      </Link>

      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/3.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Products</h3>
        </div>
      </div>
      </Link>

      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/4.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Orders</h3>
        </div>
      </div>
      </Link>

      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/5.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Management</h3>
        </div>
      </div>
      </Link>
      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/6.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Finance</h3>
        </div>
      </div>
      </Link>

      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/7.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Analytics</h3>
        </div>
      </div>
      </Link>



      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/9.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Services</h3>
        </div>
      </div>
      </Link>


      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/10.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>HR</h3>
        </div>
      </div>
      </Link>


      
      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/11.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Documents</h3>
        </div>
      </div>
      </Link>


      <Link href='/'>
      <div className='w-full px-3 py-5 items-center flex hover:bg-gray-900 cursor-pointer'>
        <div className='w-[20%] flex justify-center'>
          <img src="/2.svg" className='w-[25%]' alt="" />
        </div>
        <div className='w-[80%]'>
          <h3 className='text-white'>Settings</h3>
        </div>
      </div>
      </Link>


    </div>
  )
}


export default Sidebar