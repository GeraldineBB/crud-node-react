import React, {useState} from "react";
import ProductList from "./ProductList";
import SearchBar from "./SearchBar";

const ProductSearch = () => {

    const [searchTerms, setSearchTerms] = useState(''); 


    return (
        
        <div>
            <SearchBar searchTerms={searchTerms} setSearchTerms={setSearchTerms}/>
            <ProductList searchTerms={searchTerms}/>
        </div>
    )

}

export default ProductSearch; 