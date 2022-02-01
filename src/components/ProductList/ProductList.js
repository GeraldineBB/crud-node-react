import react, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"; 

const ProductList = () => {

    useEffect (() => {
        getProducts(); 
    }, []); 

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        axios
        .get ('http://localhost:5000/products')
        .then ((res) => {
            setProducts(res.data);
            console.log(products); 
        })
        .catch ((err) => console.error (err, 'erreur api'));

    }; 

    const deleteProduct = async (id) => {
        await axios.delete (`http://localhost:5000/products/${id}`); 
        getProducts(); 
    }

    return(

        <div>
            <Link to="/add" className="button is-primary mt-2 mb-2">Ajouter un produit</Link>
            <table className="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Produit</th>
                        <th>Prix</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { products.map((product, index) => (
                        <tr key={ product.id }>
                            <td>{ index + 1 }</td>
                            <td>{ product.title }</td>
                            <td>{ product.price }</td>
                            <td>
                                <Link to={`/edit/${product.id}`} className="button is-small is-info mr-2">Editer</Link>
                                <button onClick={ () => deleteProduct(product.id) } className="button is-small is-danger">Supprimer</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>

    )
}

export  default ProductList; 