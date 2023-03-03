
function Menu2() {
    
    return (

        <nav className='hidden desktop:flex  menu2 flex-row justify-around items-center  text-left p-[2em] w-[60%] transition-all '>
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

            <a href="../sobre/" className='menu_item'>
                Sobre
            </a>

            <button className="flex justify-center items-center px-6 py-3 font-bold bg-sub text-white rounded-md hover:bg-prim transition-all">
                Saiba mais
            </button>
            
        </nav>
    )
}

export default Menu2;