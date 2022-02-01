import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom'; 

const EditProduct = () => {
    
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const {id} = useParams(); 
    const navigate = useNavigate();

    // requête pour udpater le produit
    const updateProduct = async (e) => {
        e.preventDefault();
        await axios.patch (`http://localhost:5000/products/${id}`, {
            title: title, 
            price: price
        });
       navigate ("/"); 
    }

    // useEffect qui va appeler la fonction permettant de récupérer le produit à mettre à jour
    useEffect (() => {
        getProductById(); 
    }, []); 

    const getProductById = async () => {
        const response = await axios.get (`http://localhost:5000/products/${id}`);
        setTitle(response.data.title);
        setPrice(response.data.price); 
    }

    return (

        <div>

            <form onSubmit={updateProduct}>

                <div className="field">
                    <label className="label"> Nom du produit </label>
                    <input
                        className="input"
                        type="text"
                        placeholder="Nom du produit"
                        value={title}
                        onChange = {(e) => setTitle (e.target.value)}
                    />
                </div>

                <div className="field">
                    <label className="label"> Prix du produit</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Prix du produit"
                        value={price}
                        onChange= {(e)=> setPrice(e.target.value)}
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Mettre à jour</button>
                </div>

            </form>

        </div>
    )

}

export default EditProduct;