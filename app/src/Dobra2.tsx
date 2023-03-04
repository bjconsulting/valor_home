import React from 'react';
import icon1 from './img/icon1h.png'
import icon2 from './img/icon2h.png'
import icon3 from './img/icon3h.png'
import mock from './img/mock.png'


function Dobra2() {
    return (
        <>
            <div className="w-full bg-prim">
                <div className="flex justify-center py-8 px-4 gap-4 flex-wrap tablet:gap-6 desktop:max-w-[90%] desktop:mx-auto desktop:py-16">
                    <div className='hidden desktop:block'>
                        <img src={mock} alt="MockUp de iPhone" width='380px' height='auto' />
                    </div>
                    <div className="flex flex-col justify-center w-[calc(100%)] tablet:w-[calc(100%/4)]">
                        <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px] desktop:min-h-[400px] desktop:justify-start desktop:pt-[12%]">
                            <img src={icon1} alt="A Valor Serviços Financeiros" className='w-16 tablet:w-[50px] tablet:h-[auto]' />
                            <h2 className="font-bold my-3 px-3 tablet:text-[9px] desktop:text-xl desktop:px-0">A Valor Serviços Financeiros</h2>
                            <p className="font-normal tablet:leading-[11px] tablet:text-[11px] desktop:text-xl desktop:leading-[1.7rem]">Tem como missão proporcionar a você, de forma segura e transparente, a contratação da melhor  proposta de empréstimo</p>
                        </div>

                        <button className="font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px] desktop:text-xl hover:text-sub hover:bg-slate-500">
                            Simule seu empréstimo
                        </button>
                    </div>

                    <div className="flex flex-col justify-center w-[calc(100%)] tablet:w-[calc(100%/4)]">
                        <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px] desktop:min-h-[400px] desktop:justify-start desktop:pt-[7%]">
                            <img src={icon3} alt="A Valor Serviços Financeiros" className='w-16 tablet:w-[38px] tablet:h-[66px]' />
                            <h2 className="font-bold my-3 px-3 tablet:text-[9px] desktop:text-xl desktop:px-0">Contratação simples e 100% digital</h2>
                            <p className="font-normal normal tablet:leading-[11px] tablet:text-[11px] desktop:text-xl desktop:leading-[1.7rem]">Ao fazer seu cadastro em apenas alguns cliques, você recebe uma proposta personalizada para contratar seu empréstimo sem precisar sair de casa!</p>
                        </div>

                        <button className="font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px] desktop:text-xl hover:text-sub hover:bg-slate-500">
                            Simule seu empréstimo
                        </button>
                    </div>

                    <div className="flex flex-col justify-start w-[calc(100%)] tablet:w-[calc(100%/4)]">
                        <div className="flex flex-col p-3 bg-white justify-center text-center items-center min-h-[150px] tablet:min-h-[200px] desktop:min-h-[400px] desktop:justify-start desktop:pt-[15%]">
                            <img src={icon2} alt="A Valor Serviços Financeiros" className='w-16 tablet:w-[43px] tablet:h-[47px]' />
                            <h2 className="font-bold my-3 px-3 tablet:text-[9px] desktop:text-xl desktop:px-0">Atendimento exclusivo e personalizado</h2>
                            <p className="font-light tablet:leading-[11px] tablet:text-[11px] desktop:text-xl desktop:leading-[1.7rem]">Nossa equipe de especialistas promove uma experiência única, com foco total na sua satisfação.</p>
                        </div>

                        <button className="font-bold flex justify-center text-center py-3 w-full bg-sub mt-3 text-white tablet:text-[10px] desktop:text-xl hover:text-sub hover:bg-slate-500">
                            Simule seu empréstimo
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dobra2;