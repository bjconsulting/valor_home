import React from 'react';
import Header from './Header';

function Dobra1() {
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-start max-w-[100vw] min-h-[35vh] py-10  bg-bg-h bg-no-repeat  bg-[length:auto_100%] desktop:bg-bg-h2 desktop:bg-cover desktop:min-h-[90vh]">
                <div className="ml-4 desktop:ml-24 flex flex-col justify-center max-w-[70%] desktop:max-w-[65%]">
                    <h1 className="tablet:text-4xl tablet:font-bold tablet:max-w-[80%] tablet:pl-6 text-white max-w-[70%] desktop:text-6xl">Um Jeito Mais Consciente de Fazer Empréstimo.</h1>

                    <p className=" text-white max-w-[60%] py-5 font-light tablet:max-w-[70%] tablet:text-xl tablet:pl-6 desktop:text-4xl">Para cada necessidade, um Valor especial para você!</p>

                    <button className="bg-white py-2 pb-3 px-2 text-left rounded-md max-w-[190px] flex justify-center items-center tablet:text-[11px] tablet:max-w-[150px] tablet:text-center tablet:px-0 tablet:py-2 desktop:max-w-[310px] desktop:ml-[3%] desktop:px-2 desktop:text-2xl desktop:mt-4 desktop:uppercase  hover:bg-sub hover:text-prim transition-all"> Simule seu empréstimo </button>
                </div>
            </div>
        </>
    )
}
export default Dobra1;