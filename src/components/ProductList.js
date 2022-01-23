import React, {useEffect} from 'react';
import axios from 'axios';
import ProductTile from './ProductTile';
import { useSelector,useDispatch } from 'react-redux';
import {setProducts} from '../redux/actions/productActions';

const ProductList = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchproducts = async () => {
        const response = await axios
        .get("http://localhost:3000/products")
        .catch((err) => {
            console.error(err)
        })
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchproducts()
        console.log("Products", products);
    }, []);
    return (
        <div className="ui grid container">
            <ProductTile/>
        </div>
    );
};

export default ProductList;