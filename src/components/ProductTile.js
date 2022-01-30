import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductTile = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map(({ id, type, name, amount, image }, index) => {
        return (
            <div key={index + "_content"} className="four wide column">
                <Link to={`/products/${id}`}>
                    <div className="ui link cards">
                        <div className="card">
                            <div className="image">
                                <img src={image} alt={name} />
                            </div>
                            <div className="content">
                                <div className="header">
                                    {name}
                                </div>
                                <div className="meta price">
                                    INR {amount}
                                </div>
                                <div className="meta">
                                    {type}
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    })

    return (
        renderList
    )

};

export default ProductTile;