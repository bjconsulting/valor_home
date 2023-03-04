import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import Menu2 from "./Menu2";
import logo from './img/logo.png'
import logo2 from './img/logo_2.png'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="w-full desktop:w-[100vw] py-8 desktop:flex justify-between items-center desktop:h-[130px]">
                <div className="max-w-[85%] mx-auto flex justify-between desktop:min-w-[85%]">
                    <picture className="pointer-events-none flex justify-center items-center">
                        <source media="(min-width:640px)" srcSet={logo2} width='250px' height='auto' />
                        <img src={logo} alt="Valor Serviços" width='150px' />
                    </picture>


                    <Hamb open={open} setOpen={setOpen} />
                    <Menu open={open}/>
                    <Menu2/>

                </div>
            </header>
        </>
    )
}
export default Header