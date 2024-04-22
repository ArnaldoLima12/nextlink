import { useState } from "react";
import Cart from "../products/Cart";

const { Offcanvas, Button } = require("react-bootstrap");

const Header = ({cardCount, item, price}) =>
{   
    const [show, setShow] = useState(false);

    const open = () => setShow(true);
    const close = () => setShow(false);

    return(

        <header className="flex items-center justify-start gap-2 bg-black text-white p-2 z-10" style={{position: 'fixed', width: '100%'}}>
            
            <nav>
                <Offcanvas show={show} onHide={close} className="bg-black">
                    <Offcanvas.Header closeVariant="white" closeButton={true} >
                      
                    </Offcanvas.Header>
                </Offcanvas>
            </nav>

            <Button onClick={open} variant="dark"><i className="bi bi-list text-white"></i></Button>
            <h1 className="m-0 tracking-widest text-2xl">nextLink</h1>
            
            <Cart countItens={cardCount} itens={item} totalPrice={price}/>
        </header>
    );
}

export default Header;