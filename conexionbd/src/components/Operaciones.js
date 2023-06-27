import React, { useState } from "react";

const Operaciones = () => {
    // const [result, setResult] = useState();
    const [products, setProducts] = useState([]);
    const [views, setView] = useState([]);

    // const handleResult = async () => {
    //     try{
    //       const response = await fetch('/api/call_procedure', {
    //         method: 'POST',
    //       });
          
    //       if(response.ok){
    //         const data = await response.json();
    //         console.log(data);
    //       }
    //       else{
    //         console.error('Error en la llamada al procedimiento almacenado');
    //       }
    //     }
    //     catch(error){
    //       console.error(`Error en la solicitud ${error}`)
    //     }
    // }

    const handleSearch = async () =>
    {
        try{
            const response = await fetch('/api/search_products');

            if(response.ok){
                const data = await response.json();

                setProducts(data.products);
            }else{
                console.error('Error al buscar productos');
            }
        }
        catch(error){
            console.error(`Error en la solicitud: ${error}`);
        }
    }


    const handleView = async () =>
    {
        try{
            const response = await fetch('/api/view');

            if(response.ok){
                const data = await response.json();

                setView(data.products);
            }else{
                console.error('Error al buscar productos');
            }
        }
        catch(error){
            console.error(`Error en la solicitud: ${error}`);
        }
    }

    return(
        // <div>
        //     Hola mundo cruel!!
        // </div>
        <div>
            {/* <button
                onClick={handleResult}
            >
                LLamada al procedimiento
            </button>
            <div>
                Resultado del procedimiento almacenado: <span>{result}</span>
            </div>
            <br/> */}
            <button
            onClick={handleSearch}>
                Buscar productos
            </button>

            <button
            onClick={handleView}>
                Buscar view
            </button>


            <div>
                {/* Resultado de productos: <span>{products}</span> */}
                {products.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                products.map( (product) => (
                                    <tr key={product.product_id}>
                                        <td>{product.product_id}</td>
                                        <td>{product.product_name}</td>
                                        <td>{product.product_description}</td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
                  )
                }
            </div>



            <div>
                {/* Resultado de productos: <span>{views}</span> */}
                {views.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                            </tr>                            
                        </thead>
                        <tbody>
                            {
                                views.map( (view) => (
                                    <tr key={view.product_id}>
                                        <td>{view.product_id}</td>
                                        <td>{view.product_name}</td>
                                        <td>{view.product_description}</td>
                                    </tr>
                                ))
                            }                            
                        </tbody>
                    </table>
                  )
                }
            </div>



        </div>        
    );
}

export default Operaciones;

