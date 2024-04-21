import FetchProducts from "@/api/ProductList";
import Header from "@/components/common/Header";
import Layout from "@/components/common/Layout";
import Cards from "@/components/products/Cards";

import { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";


export default function Home()
{  
    const [data, setData] = useState(null);

    const listProduct = async () =>
    {
        setData(await FetchProducts());
    }

    useEffect(() =>
    {
        listProduct();
    }, []);
    

    return(

        <Layout>
            <Header/>

            <div className="content-app h-2/4">

                {data && data.list && data.list.length > 0 ? 
                    (data.list.map(item =>
                        <Cards key={item._id} itemName={item.name} itemPrice={item.price}/>
                    )) 
                    : 
                    (data ? 
                        (<Alert variant="danger"> <Alert.Heading>Ocorreu um erro</Alert.Heading> {data.erro || 'Nenhum produto cadastrado'}</Alert>)
                         : (<Spinner  variant="primary"/>))
                }
                
            </div>
        </Layout>        
    );
}