import React from 'react';
import Header3 from './Header3';

function Dobra1() {
    return (
        <>
            <Header3 />
            <div className="flex flex-col justify-center items-start max-w-[100vw] min-h-[35vh] py-10  bg-bg-h bg-no-repeat  bg-[length:auto_100%]">
                <div className="pl-4 flex flex-col justify-center max-w-[70%]">
                    <h1 className="text-[13px] text-white max-w-[70%] ">Um Jeito Mais Consciente de Fazer Empréstimo.</h1>

                    <p className=" text-white max-w-[60%] py-2 font-light text-[12px]">Para cada necessidade, um Valor especial para você!</p>

                    <button className="bg-white py-1 px-6 text-left rounded-md text-[6px] max-w-[63px] flex justify-center ml-[15%]"> Simule seu <br/>empréstimo. </button>
                </div>
            </div>
        </>
    )
}
export default Dobra1;