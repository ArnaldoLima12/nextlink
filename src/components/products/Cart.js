import { useState } from "react";

const {Button, Toast } = require("react-bootstrap")

const Cart = ({countItens, itens, totalPrice}) =>
{   

    const [show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
   
  

    return(
        
        <div className="flex w-100 items-center justify-end">
        
            <Button onClick={toggleShow} style={{backgroundColor: 'transparent', borderColor: 'transparent'}}>
                <i className="bi bi-cart text-2xl"></i> <small>{countItens > 0 ? countItens : '' }</small>
            </Button>

            <Toast style={{position: 'absolute', top: '60px'}}  show={show} onClose={toggleShow} bg="dark" data-bs-theme='dark'
            >
               
               <Toast.Header >
                    <strong className="me-auto">Carrinho</strong>
                    <small>{countItens}</small>
               </Toast.Header>
               
               <Toast.Body className="flex flex-col gap-2">

                    {itens.map(item => (
                          
                        <div className="border p-2 rounded bg-gray-700 flex items-center justify-between" key={item.key}>
                          <strong>{item.name}</strong>
                          <div className="flex items-center justify-end">
                              <small>R${item.price}</small>
                              <Button style={{backgroundColor: 'transparent', borderColor: 'transparent'}}><i className="bi bi-trash"></i></Button>
                          </div>
                        </div>
                    ))}

                    <div className=" border-t">
                        <small>Total {totalPrice}</small>

                    </div>          
               </Toast.Body>
            </Toast>

        </div>
       
      
    )
}



export default Cart;