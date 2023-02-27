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
        <div className='bg-white px-4'>
            <div className="flex flex-col gap-4 justify-center items-center pb-10">
                <h3 className="title tracking-[.5em] font-bold text-prim text-center text-[14px] mt-[3em]">
                    Serviços
                </h3>
                <h2 className="text-[29px] font-bold text-center mb-6">
                    Confira os Nossos <span className="text-sub">Serviços</span> Disponíveis
                </h2>

                <div className=" items flex flex-col justify-center items-center bg-prim  py-4 rounded-xl max-w-[50%] mx-auto">
                    
                    <picture>
                        <source media="(min-width:800px)" srcSet={img1b} width='auto' />

                        <img src={img1} alt="Empréstimo com Garantia FGTS" width='152px' className=" border-white rounded-lg" />
                    </picture>

                    <div className='px-2'>
                        <h3 className="font-bold text-[11px] text-center my-[1em] text-white max-w-[90%] mx-auto">
                            Empréstimo com Garantia de FGTS
                        </h3>

                        <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <FaHandshake className='min-w-[14px]'/>
                                <p className="font-bold text-[8px]">
                                    Antecipe até 10 anos do Saque Aniversário.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Juros a partir de 1,79%.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Realiza para negativados.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <FaCalendarAlt className='min-w-[15px]' />
                                <p className="font-bold text-[8px]">
                                    Sem parcelas mensais, parcelas descontadas diretamente da sua conta FGTS.
                                </p>
                            </div>

                        </div>

                        <button className='rounded-xl font-bold flex justify-center items-center text-[13px] px-4 bg-white py-2 mt-3 mx-auto'>
                            Simular agora
                        </button>

                    </div>
                </div>

                <div className=" items flex flex-col justify-center items-center bg-prim  py-4 rounded-xl max-w-[50%] mx-auto">

                    <picture>
                        <source media="(min-width:800px)" srcSet={img2b} width='auto' />

                        <img src={img2} alt="Crédito Consignado INSS" width='152px' className=" border-white rounded-lg" />
                    </picture>

                    <div className='px-2'>
                        <h3 className="font-bold text-[11px] text-center my-[1em] text-white max-w-[90%] mx-auto">
                            Crédito Consignado INSS
                        </h3>

                        <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <BsPeopleFill className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Aposentados, pensionistas, beneficiário do Loas e Representante Legal.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Juros a partir de 2,14%.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Realiza para negativados.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <BsSearch className='min-w-[15px]' />
                                <p className="font-bold text-[8px]">
                                    Crédito pré-aprovado conforme sua margem disponível do benefício.
                                </p>
                            </div>

                        </div>

                        <button className='rounded-xl font-bold flex justify-center items-center text-[13px] px-4 bg-white py-2 mt-3 mx-auto'>
                            Simular agora
                        </button>

                    </div>
                </div>

                <div className=" items flex flex-col justify-center items-center bg-prim  py-4 rounded-xl max-w-[50%] mx-auto">

                    <picture>
                        <source media="(min-width:800px)" srcSet={img3b} width='auto' />

                        <img src={img3} alt="Crédito Consignado Servidor Publico" width='152px' className=" border-white rounded-lg" />
                    </picture>

                    <div className='px-2'>
                        <h3 className="font-bold text-[11px] text-center my-[1em] text-white max-w-[90%] mx-auto">
                            Crédito Consignado
                            Servidor Publico
                        </h3>

                        <div className='flex flex-col gap-4 justify-center items-center max-w-[100%] mx-auto'>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <BsPlusLg className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Aposentados, Pensionistas e Ativos (FEDERAL, ESTADUAL).
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Juros a partir de 2,00%.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <MdAttachMoney className='min-w-[14px]' />
                                <p className="font-bold text-[8px]">
                                    Realiza para negativados.
                                </p>
                            </div>

                            <div className="flex flex-row justify-start items-center gap-2 w-full text-left px-5 text-white">
                                <FaCalendarAlt className='min-w-[15px]' />
                                <p className="font-bold text-[8px]">
                                    Parcelas descontadas automaticamente da sua folha de pagamento.
                                </p>
                            </div>

                        </div>

                        <button className='rounded-xl font-bold flex justify-center items-center text-[13px] px-4 bg-white py-2 mt-3 mx-auto'>
                            Simular agora
                        </button>

                    </div>
                </div>

                

            </div>
        </div>
    )
}
export default Dobra3;