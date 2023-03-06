import React from 'react';
import Header from './Header';

function Dobra1() {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-start bg-center max-w-[100vw] bg-cover py-10  bg-bg-h bg-no-repeat desktop:bg-bg-h2 desktop:bg-cover desktop:min-h-[90vh]">
                <div className="flex flex-col mx-4 justify-center tablet:max-w-[70%] desktop:max-w-[65%] desktop:ml-24">
                    <h1 className="w-full text-5xl text-white tablet:text-4xl tablet:font-bold tablet:max-w-[80%] tablet:pl-6 desktop:text-6xl">Um Jeito Mais Consciente de Fazer Empréstimo.</h1>

                    <p className="text-lg text-white py-5 font-light tablet:max-w-[70%] tablet:text-xl tablet:pl-6 desktop:text-4xl">Para cada necessidade, um Valor especial para você!</p>

                    <button className="font-bold text-xl bg-white p-2 text-left rounded-md flex justify-center items-center tablet:font-normal tablet:ml-6 tablet:text-[11px] tablet:max-w-[150px] tablet:text-center tablet:px-0 tablet:py-2 desktop:max-w-[310px] desktop:ml-[3%] desktop:px-2 desktop:text-2xl desktop:mt-4 desktop:uppercase  hover:bg-sub hover:text-prim transition-all"> Simule seu empréstimo </button>
                </div>
            </div>
        </>
    )
}
export default Dobra1;