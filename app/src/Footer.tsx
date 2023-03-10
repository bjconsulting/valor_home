import React from 'react'

import logo from './img/logo_w.png'
import logo2 from './img/logo_wb.png'

function Footer() {
    return(
        <div className="py-10 flex flex-col tablet:flex-row bg-prim gap-4 tablet:justify-center tablet:items-top desktop:py-20">
            <div className="flex flex-col justify-start items-center text-center text-white gap-7 max-w-[80%] mx-auto tablet:basis-[25%] desktop:basis-[20%] desktop:items-start">
                <picture className="pointer-events-none">
                    <source media="(min-width:640px)" srcSet={logo2} width='250px' />
                    <img src={logo} alt="Valor Serviços" width='150px' />
                </picture>
                <p className='uppercase text-[11px] font-normal tablet:text-left'>
                    VALOR SERVIÇOS FINANCEIROS LTDA CNPJ: 42.095.396/0001-48 TELEFONE: (18) 3600-7910
                </p>
            </div>

            <div className="flex flex-col gap-2 justify-center items-center tablet:basis-[20%] tablet:justify-center tablet:items-start desktop:basis-[10%]">
                <h3 className='font-bold text-center text-white text-[19px] my-5 tablet:mt-0 mb-7 tablet:text-left'>Links Rápidos</h3>
                <ul className="ul_footer text-center flex flex-col gap-4 text-white font-light tablet:text-left">
                    <li><a href="#serviços"> Serviços </a> </li>
                    <li><a href="#contato"> Contato </a></li>
                    <li><a href="#depoimentos"> Depoimentos </a></li>
                    <li><a href="#home"> Blog </a></li>
                    <li><a href="../sobre/"> Sobre </a></li>
                </ul>
            </div>

            <p className='text-[13px] font-normal text-center text-white max-w-[80%] mx-auto mt-7 tablet:mt-0 mb-3 tablet:basis-[30%] tablet:text-left'>
                A Valor – Serviços Financeiros é um Correspondente Bancário que atua de acordo com as diretrizes estabelecidas na Resolução 3.954/2011.
                Não somos uma instituição financeira e não realizamos operações de crédito diretamente. Atuamos em parceria independente e nos responsabilizamos inteiramente por toda a prestação de serviços aqui oferecidas, intermediando crédito. Não cobramos taxas de nenhuma liberação de crédito. Nosso serviço é TOTALMENTE GRATUITO.
            </p>
        </div>
    )
}

export default Footer;