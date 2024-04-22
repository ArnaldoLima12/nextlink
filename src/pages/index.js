import FetchProducts from "@/api/ProductList";
import Header from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import Cards from "@/components/products/Cards";

import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";


export default function Home()
{  
    const [data, setData] = useState(null);
    const [cartItem, setCardItem] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);


    const listProduct = async () =>
    {
        setData(await FetchProducts());
    }

    const addToCart = (item) =>
    {
        setCardItem((prev) => [...prev, item])
        const newTotal = totalPrice + item.price;
        setTotalPrice(parseFloat(newTotal.toFixed(2)));
    }

    const cardCount = cartItem.length;

    useEffect(() =>
    {
        listProduct();
    }, []);
    

    return(

        <Layout>
            
            <Header cardCount={cardCount} item={cartItem} price={totalPrice}/>

            <div className="content-app h-2/4">

                {data && data.list && data.list.length > 0 ? 
                    (data.list.map(item =>
                        <Cards key={item._id} itemName={item.name} itemPrice={item.price} addCart={addToCart}/>
                    )) 
                    : (data ? (

                        <Alert variant="danger">
                            <Alert.Heading>Ocorreu um erro</Alert.Heading> 
                            {data.erro || 'Nenhum produto cadastrado'}
                        </Alert>) : (
                        
                        <Spinner  variant="primary"/>
                    ))}
                
            </div>
        </Layout>        
    );
}