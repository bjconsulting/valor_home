import React from 'react';



const Hamb = ({ open, setOpen } : { open: boolean, setOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void; }) => {



    return (
        <button className='flex flex-col justify-around cursor-pointer bg-transparent outline-none border-none z-10 absolute top-[5%] right-[4em]  gap-1'  onClick={() => setOpen(!open)}>
            <div className='h-2  w-10 rounded-md relative transition-all origin-[1px] ham'/>
            <div className='h-2  w-10 rounded-md relative transition-all origin-[1px] ham2'/>
            <div className='h-2  w-10 rounded-md relative transition-all origin-[1px] ham3'/>
        </button>
    )
}

export default Hamb;


