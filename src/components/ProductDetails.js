/* eslint-disable no-unused-expressions */

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { seletedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    console.log("PRODUCT", product);
    const {name, image, type, amount, description} = product
    const fetchProductDetails = async () => {
        const response = await axios
            .get(`http://localhost:3000/products/${productId}`)
            .catch(err => {
                console.error(err);
            })
        dispatch(seletedProduct(response.data))
    };
    useEffect(() => {
        if (productId && productId !== "") fetchProductDetails();
    }, [productId])
    return (
        <div className="ui grid container">
            {Object.keys(product).length === 0 ? (
                <div className="ui loading segment">
                    <p></p>
                    <p></p>
                </div>
            ) : (
               
            <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
                <div className="column lp">
                    <img src={image} alt="" className="ui fluid image" />
                </div>
                <div className="column rp">
                    <h1>{name}</h1>
                    <h2>
                        <a href="" className="ui teal tag label">Rs {amount}</a>
                    </h2>
                    <h3 className="ui brown block header">{type}</h3>
                    <p>{description}</p>
                    <div className="ui vertical animated button">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                    </div>
                </div>
            </div>
        </div>)}
            
        </div>
    );
};

export default ProductDetails;