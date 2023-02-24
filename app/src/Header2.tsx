import { Component } from "react";
import Hamb from "./Hamb";
import Menu from "./Menu";
import logo from './img/logo.png'
import logo2 from './img/logo_2.png'

class Header2 extends Component {
    state = { open: false };

    render() {
      return <>
                <header className="w-full p-8">
                    <div className="max-w-[90%] mx-auto flex justify-between pointer-events-none">
                        <picture>
                            <source media="(min-width:1024px)" srcSet={logo2} width='250px' />
                            <img src={logo} alt="Valor Serviços" width='auto' />
                        </picture>

                        <div>
                            {/* <Hamb open={this.state.open} setOpen={this.setState} />
                            <Menu open={this.state.open}/> */}
                        </div>
                    </div>
                </header>
              </>
    }
}
//export default Header2