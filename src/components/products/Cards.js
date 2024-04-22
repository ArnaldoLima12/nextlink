const { Card, Button } = require("react-bootstrap");

const Cards =  ({itemName, itemPrice, itemDescription, itemPhoto, addCart}) =>
{   

    const addItemToCard = () =>
    {
      if(addCart)
      {
        const newItem = {
          name: itemName,
          price: itemPrice,
          description: itemDescription,
          photo: itemPhoto
        };

        addCart(newItem);
      }
    }

    return(
       
        <Card style={{width: '15rem', minHeight: '21rem'}} bg="dark" text="white">
          
          <Card.Img src="/icons/bgCard.jpg"></Card.Img>
          
          <Card.Body className="flex flex-col justify-between">
            
            <Card.Title>{itemName}</Card.Title>

            <Card.Text className="text-xs text-slate-300">
                {itemDescription}
            </Card.Text>
            
            <Button variant="success" className="button-add-cart" style={{width: '100%'}} onClick={addItemToCard}> <strong className="button-add-cart">R$ {itemPrice}</strong> <i class="bi bi-cart-plus hidden"></i></Button>
          </Card.Body>
        
        </Card>
    );
}

export default Cards;