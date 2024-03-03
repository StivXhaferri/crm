
'use client'
import React , {useState} from 'react'
import { Calendar } from "@/components/ui/calendar"



const page = () => {


    const [date, setDate] = useState(new Date())

    return(
        <div className='w-full p-3 '>
            <div className='w-full flex items-center'>
                <div className='w-[33.3%]'></div>
                <div className='w-[33.3%]'></div>
                <div className='w-[33.3%]'>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md w-[75%] mx-auto border"
                />
                </div>
            </div>
        </div>
    )
}

export default page