import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
  import { Button } from '@/components/ui/button'


const Navbar = () => {
    return(
        <div className='w-full bg-[#2C2C2C] flex items-center gap-5 justify-end px-4 py-4'>
            <div className='bg-white bg-opacity-[0.3] px -2 py-1 w-[200px] rounded-lg flex items-center overflow-hidden'>
                <img src="/8.svg" className='w-[12%] pl-2' alt="" />
                <input type="text" className='pl-2  w-[80%] bg-transparent focus:outline-none text-white' />
            </div>
            <div className='flex items-center'>
           

            <Drawer>
            <DrawerTrigger>
                        <Avatar>
                            <AvatarImage src="" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                <Button>Submit</Button>
                <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
            </Drawer>

            </div>
        </div>
    )
}


export default Navbar;