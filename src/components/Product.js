import React, { Component } from 'react';


class Product extends Component {
    render() {
        return (
            <div className="row">
                <div className="col l-12">
                    <p className="text">Products</p>
                </div>
                
                <div className="col l-4">
                    <div className="product">
                        <img src={`${process.env.PUBLIC_URL}/images/macbook.jpg`} alt="macbook" />
                        <p className="product-name">Macbook</p>
                        <p className="price">$1000</p>
                        <div className="add-to-cart">
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
                <div className="col l-4">
                    <div className="product">
                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/images/old-car.jpg`} alt="old car" />
                            <p className="product-name">Old car</p>
                            <p className="price">$2000</p>
                            <div className="add-to-cart">
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col l-4">
                    <div className="product">
                        <div className="product">
                            <img src={`${process.env.PUBLIC_URL}/images/shoes.jpg`} alt="shoes" />
                            <p className="product-name">Shoes</p>
                            <p className="price">$3000</p>
                            <div className="add-to-cart">
                                <p>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
