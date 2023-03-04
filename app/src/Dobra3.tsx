import React from 'react'
import img1 from './img/fgts.jpg'
import img1b from './img/fgts_b.jpg'
import img2 from './img/inss.jpg'
import img2b from './img/inss_b.jpg'
import img3 from './img/consig.jpg'
import img3b from './img/cons_b.jpg'

import { FaCalendarAlt, FaHandshake } from 'react-icons/fa'
import { MdAttachMoney } from 'react-icons/md'
import { BsPeopleFill, BsSearch, BsPlusLg } from 'react-icons/bs'

function Dobra3() {
    return (
        <div className='bg-white px-4 tablet:flex tablet:justify-center tablet:items-center'>
            <div className="flex flex-col gap-4 justify-center items-center pb-10 ">
                <h3 className="title tracking-[.5em] font-bold text-prim text-center text-[14px] tablet:text-[20px] mt-[3em]">
                    Serviços
                </h3>
                <h2 className="text-[29px] font-bold text-center mb-6 tablet:text-[42px] tablet:px-44">
                    Confira os Nossos <span className="text-sub">Serviços</span> Disponíveis
                </h2>

                <div className=' flex flex-col tablet:flex-row tablet:justify-center  tablet:max-w-[90%] gap-4'>

                    <div className=" items flex flex-col items-center bg-prim  py-4 rounded-xl mx-auto tablet:max-w-[calc(100%/4)]">

                        <picture className='w-[90%]'>
                            <source media="(min-width:640px)" srcSet={img1b} width='auto' />

                            <img src={img1} alt="Empréstimo com Garantia FGTS" className="w-full border-white rounded-lg mx-auto" />
                        </picture>

                        <div className='px-2'>
                            <h3 className="font-bold text-center my-[2em] text-white max-w-[90%] mx-auto desktop:text-2xl desktop:my-4">
                                Empréstimo com Garantia de FGTS
                            </h3>

                            <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-2">
                                    <FaHandshake className='min-w-[30px] aspect-square desktop:min-w-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Antecipe até 10 anos do Saque Aniversário.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <MdAttachMoney className='min-w-[30px] aspect-square desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Juros a partir de 1,79%.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <MdAttachMoney className='min-w-[30px] aspect-square desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Realiza para negativados.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <FaCalendarAlt className='min-w-[30px] aspect-square desktop:min-w-[30px]' />
                                    <p className="font-normal desktop:text-base">
                                        Sem parcelas mensais, parcelas descontadas diretamente da sua conta FGTS.
                                    </p>
                                </div>

                            </div>

                            <button className='rounded-xl font-bold flex justify-center items-center px-4 bg-white py-2 mt-6 mx-auto desktop:text-xl hover:bg-sub hover:text-prim'>
                                Simular agora
                            </button>

                        </div>
                    </div>

                    <div className=" items flex flex-col items-center bg-prim  py-4 rounded-xl mx-auto tablet:max-w-[calc(100%/4)]">

                        <picture className='w-[90%]'>
                            <source media="(min-width:640px)" srcSet={img2b} width='auto' />

                            <img src={img2} alt="Crédito Consignado INSS" className="w-full border-white rounded-lg mx-auto" />
                        </picture>

                        <div className='px-2'>
                            <h3 className="font-bold text-center my-[2em] text-white max-w-[90%] mx-auto desktop:text-2xl desktop:my-4">
                                Crédito Consignado INSS
                            </h3>

                            <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <BsPeopleFill className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Aposentados, pensionistas, beneficiário do Loas e Representante Legal.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <MdAttachMoney className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Juros a partir de 2,14%.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-1">
                                    <MdAttachMoney className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Realiza para negativados.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-3">
                                    <BsSearch className='min-w-[30px] desktop:min-w-[20px] desktop:min-h-[30px]' />
                                    <p className="font-normal desktop:text-base">
                                        Crédito pré-aprovado conforme sua margem disponível do benefício.
                                    </p>
                                </div>

                            </div>

                            <button className='rounded-xl font-bold flex justify-center items-center px-4 bg-white py-2 mt-6 mx-auto desktop:text-xl'>
                                Simular agora
                            </button>

                        </div>
                    </div>

                    <div className=" items flex flex-col items-center bg-prim  py-4 rounded-xl mx-auto tablet:max-w-[calc(100%/4)]">

                        <picture className='w-[90%]'>
                            <source media="(min-width:640px)" srcSet={img3b} width='auto' />

                            <img src={img3} alt="Crédito Consignado Servidor Publico" className="w-full border-white rounded-lg mx-auto" />
                        </picture>

                        <div className='px-2'>
                            <h3 className="font-bold text-center my-[2em] text-white max-w-[90%] mx-auto desktop:text-2xl desktop:my-4">
                                Crédito Consignado
                                Servidor Publico
                            </h3>

                            <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-3">
                                    <BsPlusLg className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[20px]' />
                                    <p className="font-normal desktop:text-base">
                                        Aposentados, Pensionistas e Ativos (FEDERAL, ESTADUAL).
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-3">
                                    <MdAttachMoney className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Juros a partir de 2,00%.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-3">
                                    <MdAttachMoney className='min-w-[30px] desktop:min-w-[30px] desktop:min-h-[25px]' />
                                    <p className="font-normal desktop:text-base">
                                        Realiza para negativados.
                                    </p>
                                </div>

                                <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white desktop:px-3">
                                    <FaCalendarAlt className='min-w-[30px] desktop:min-w-[30px]' />
                                    <p className="font-normal desktop:text-base">
                                        Parcelas descontadas automaticamente da sua folha de pagamento.
                                    </p>
                                </div>

                            </div>

                            <button className='rounded-xl font-bold flex justify-center items-center px-4 bg-white py-2 mt-6 mx-auto desktop:text-xl'>
                                Simular agora
                            </button>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}
export default Dobra3;