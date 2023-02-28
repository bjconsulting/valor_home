import React from 'react';
import icon1 from './img/icon1h.png'
import icon2 from './img/icon2h.png'
import icon3 from './img/icon3h.png'


function Dobra2() {
    return (
        <>
            <div className="flex justify-center bg-prim py-8 px-4 gap-4 tablet:gap-6 ">
                <div className="flex flex-col justify-center w-[calc(100%/3)] tablet:w-[calc(100%/4)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px]">
                        <img src={icon1} alt="A Valor Serviços Financeiros" width='26px' className='tablet:w-[50px] tablet:h-[auto]'/>
                        <h2 className="text-[5px] font-bold my-3 px-3 tablet:text-[9px]">A Valor Serviços Financeiros</h2>
                        <p className="text-[6px] font-normal leading-[7px] tablet:leading-[11px] tablet:text-[11px]">Tem como missão proporcionar a você, de forma segura e transparente, a contratação da melhor  proposta de empréstimo</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px]">
                        Simule seu empréstimo
                    </button>
                </div>

                <div className="flex flex-col justify-center w-[calc(100%/3)] tablet:w-[calc(100%/4)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px]">
                        <img src={icon3} alt="A Valor Serviços Financeiros" width='20px' className='tablet:w-[38px] tablet:h-[66px]'/>
                        <h2 className="text-[5px] font-bold my-3 px-3 tablet:text-[9px]">Contratação simples e 100% digital</h2>
                        <p className="text-[6px] font-normal normal leading-[7px] tablet:leading-[11px] tablet:text-[11px]">Ao fazer seu cadastro em apenas alguns cliques, você recebe uma proposta personalizada para contratar seu empréstimo sem precisar sair de casa!</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px]">
                        Simule seu empréstimo
                    </button>
                </div>

                <div className="flex flex-col justify-center w-[calc(100%/3)] tablet:w-[calc(100%/4)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px]">
                        <img src={icon2} alt="A Valor Serviços Financeiros" width='26px' className='tablet:w-[43px] tablet:h-[47px]' />
                        <h2 className="text-[5px] font-bold my-3 px-3 tablet:text-[9px]">Atendimento exclusivo e personalizado</h2>
                        <p className="text-[6px] font-light leading-[7px] tablet:leading-[11px] tablet:text-[11px]">Nossa equipe de especialistas promove uma experiência única, com foco total na sua satisfação.</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px]">
                        Simule seu empréstimo
                    </button>
                </div>
            </div>
        </>
    )
}
export default Dobra2;