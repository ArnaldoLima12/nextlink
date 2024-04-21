const FetchProducts = async () =>
{   
    try
    {
        const response = await fetch('http://localhost:8080/API/list/1/10');
        const data  = await response.json();
        return data;
    }
    catch(erro)
    {
        const data = {erro: 'Falha ao conectar-se a base de dados!'}
        return data;
    }
}

export default FetchProducts;