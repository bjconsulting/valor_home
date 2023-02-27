import React from 'react'
// import item from './img/item.png'
import itemb from './img/item_b.png'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelephoneFill } from 'react-icons/bs'


function Dobra5() {
    return(
        <div className="flex flex-row justify-center items-end gap-4 bg-[rgba(217,_217,_217,_.3)] pt-6">
                <picture>
                    <source media="(min-width:800px)" srcSet={itemb} width='auto' />
                    <img src={itemb} alt="Menina jovem com um headset" width="132px" height="136px"/>
                </picture>

            <div className="flex flex-col justify-center items-center gap-6">
                <h3 className="font-bold text-[40px] text-prim">
                    Contatos
                </h3>

                <div className='flex justify-around items-center gap-2'>
                    <AiFillInstagram className="w-[2em] h-[2em] fill-sub"/>
                    <AiFillFacebook className="w-[2em] h-[2em] fill-sub" />
                    <RiWhatsappFill className="w-[2em] h-[2em] fill-sub" />
                    <BsTelephoneFill className="w-[1.5em] h-[1.5em] fill-sub" />
                </div>

                <button className='rounded-xl bg-prim py-2 px-4 text-white font-bold text-[9px] mb-4'>Fale Conosco</button>

            </div>
        </div>
    )
}

export default Dobra5;