import { useState } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import logo from './img/logo.png'
import logo2 from './img/logo_2.png'

function Header() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <header className="w-full py-8">
                <div className="max-w-[90%] mx-auto flex justify-between">
                    <picture className="pointer-events-none">
                        <source media="(min-width:1024px)" srcSet={logo2} width='250px' />
                        <img src={logo} alt="Valor Serviços" width='150px' />
                    </picture>

                    <div>
                        <Hamb open={open} setOpen={setOpen} />
                        <Menu open={open}/>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header