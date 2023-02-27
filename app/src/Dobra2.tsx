import React from 'react';
import icon1 from './img/icon1.png'
import icon2 from './img/icon2.png'
import icon3 from './img/icon3.png'


function Dobra2() {
    return (
        <>
            <div className="flex justify-around bg-prim py-4 px-4 gap-4">
                <div className="flex flex-col justify-center w-[calc(100%/3)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px]">
                        <img src={icon1} alt="A Valor Serviços Financeiros" width='26px'/>
                        <h2 className="text-[5px] font-bold my-3 px-3">A Valor Serviços Financeiros</h2>
                        <p className="text-[6px] font-normal leading-[7px]">Tem como missão proporcionar a você, de forma segura e transparente, a contratação da melhor  proposta de empréstimo</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white">
                        Simule seu empréstimo
                    </button>
                </div>

                <div className="flex flex-col justify-center w-[calc(100%/3)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px]">
                        <img src={icon2} alt="A Valor Serviços Financeiros" width='20px' />
                        <h2 className="text-[5px] font-bold my-3 px-3">Contratação simples e 100% digital</h2>
                        <p className="text-[6px] font-normal normal leading-[7px]">Ao fazer seu cadastro em apenas alguns cliques, você recebe uma proposta personalizada para contratar seu empréstimo sem precisar sair de casa!</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white">
                        Simule seu empréstimo
                    </button>
                </div>

                <div className="flex flex-col justify-center w-[calc(100%/3)]">
                    <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px]">
                        <img src={icon3} alt="A Valor Serviços Financeiros" width='26px' />
                        <h2 className="text-[5px] font-bold my-3 px-3">Atendimento exclusivo e personalizado</h2>
                        <p className="text-[6px] font-normal normal leading-[7px]">Nossa equipe de especialistas promove uma experiência única, com foco total na sua satisfação.</p>
                    </div>

                    <button className="text-[5px] font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white">
                        Simule seu empréstimo
                    </button>
                </div>
            </div>
        </>
    )
}
export default Dobra2;