import React from 'react';

const Menu = ({ open }: { open: boolean }) => {
    return(
        open
        ? <nav className='flex flex-col justify-center bg-prim h-[100vh] text-left p-[2em] absolute top-0 right-0 transition-transform translate-x-[-100%] '>
                <a href="#home" className='menu_item'>
                Home
                </a>
                
                <a href="#serviços" className='menu_item'>
                Serviços
                </a>

                <a href="#contato" className='menu_item'>
                Contato
                </a>
                
                <a href="#depoimentos" className='menu_item'>
                Depoimentos
                </a>
                
                <a href="#s" className='menu_item'>
                Blog
                </a>
                
                <a href="#s" className='menu_item'>
                Sobre
                </a>
            </nav>
        : <> </>
    )
}

export default Menu;