/* eslint-disable no-unused-expressions */

import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { seletedProduct, removeSeletedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {

    const product = useSelector((state) => state.product)
    const { productId } = useParams();
    console.log(productId);
    const dispatch = useDispatch();
    console.log("PRODUCT", product);
    const { name, image, type, amount, description } = product
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
        return () => {
            dispatch(removeSeletedProduct())
        }
    }, [productId])
    return (
        <div className="ui container">
            {Object.keys(product).length === 0 ? (
                <div className="ui loading segment">
                    <p></p>
                    <p></p>
                </div>
            ) : (
                <div className="ui placeholder segment">
                    <div className="ui two column stackable center aligned grid">
                        <div className="ui vertical divider">AND</div>

                        <div className="middle aligned row">
                            <div className="column">
                                <img src={image} alt="" className="ui fluid image" />
                            </div>
                            <div className="column">
                                <h1 className="ui red block header">{name}</h1>
                                <h2 className="ui header"> 
                                    <a href="" className="ui teal tag label">Rs {amount}</a>
                                </h2>
                                <h3 className="ui brown header">
                                    {type}
                                </h3>
                                <h4 className="ui header">
                                    <p>{description}</p>
                                </h4>
                                <div className="ui vertical animated button">
                                    <div className="hidden content">
                                        <i className="shop icon"></i>
                                    </div>
                                    <div className="visible content">Add to Cart</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                // <div class="ui placeholder segment">
                //     <div class="ui two column stackable center aligned grid">
                //         <div class="ui vertical divider">Or</div>
                //         <div class="middle aligned row">
                //             <div class="column">
                //                 <div class="ui icon header">
                //                     <i class="search icon"></i>
                //                     Find Country
                //                 </div>
                //                 <div class="field">
                //                     <div class="ui search">
                //                         <div class="ui icon input">
                //                             <input class="prompt" type="text" placeholder="Search countries..."/>
                //                                 <i class="search icon"></i>
                //                         </div>
                //                         <div class="results"></div>
                //                     </div>
                //                 </div>
                //             </div>
                //             <div class="column">
                //                 <div class="ui icon header">
                //                     <i class="world icon"></i>
                //                     Add New Country
                //                 </div>
                //                 <div class="ui primary button">
                //                     Create
                //                 </div>
                //             </div>
                //         </div>
                //     </div>
                // </div>
            )}

        </div>
    );
};

export default ProductDetails;