import React from 'react'
// import item from './img/item.png'
import itemb from './img/item_b.png'
import itemc from './img/item_c.png'
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsTelephoneFill } from 'react-icons/bs'


function Dobra5() {
    return(
        <div className="flex flex-row justify-center items-end desktop:items-center gap-4 tablet:gap-[13%] bg-[rgba(217,_217,_217,_.3)] pt-6">
                <picture>
                    <source media="(min-width:640px)" srcSet={itemc} width='auto' />
                    <img src={itemb} alt="Menina jovem com um headset" width="auto" height="136px" className='w-[135px] tablet:w-[200px] desktop:w-[400px]'/>
                </picture>

            <div className="flex flex-col justify-center items-center gap-6">
                <h3 className="font-bold text-[40px] desktop:text-7xl text-prim">
                    Contatos
                </h3>

                <div className='flex justify-around items-center gap-4 desktop:gap-8'>
                    <a href="https://www.instagram.com/VALORSFINANCEIROS/" target="_blank"><AiFillInstagram className="w-[2em] h-[2em] desktop:w-[3em] desktop:h-[3em] fill-sub"/></a>
                    <a href="https://www.facebook.com/valorsfinanceiros" target="_blank"><AiFillFacebook className="w-[2em] h-[2em] desktop:w-[3em] desktop:h-[3em] fill-sub" /></a>
                    <a href="https://wa.me/5518991332855" target="_blank"><RiWhatsappFill className="w-[2em] h-[2em] desktop:w-[3em] desktop:h-[3em] fill-sub" /></a>
                    <a href="tel:+551836007910" target="_blank"><BsTelephoneFill className="w-[1.5em] h-[1.5em] desktop:w-[2.5em] desktop:h-[2.5em] fill-sub" /></a>
                </div>

                <button className='rounded-xl bg-prim py-2 px-4 text-white font-bold text-[10px] mb-4 desktop:bg-sub desktop:text-2xl hover:text-sub hover:bg-prim'>Fale Conosco</button>

            </div>
        </div>
    )
}

export default Dobra5;