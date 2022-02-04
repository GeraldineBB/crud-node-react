import React, {useState} from "react";

const SearchBar = ({setSearchTerms}) => {


    return (

        <input 
        className="input"
        type="text" 
        placeholder="Rechercher votre produit" 
        onChange= { (e) => setSearchTerms(e.target.value)} />
    )

}

export default SearchBar; 