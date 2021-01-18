import React, { Component } from 'react';

class Product extends Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(id) {
        this.props.addToCart(id);
    }

    render() {
        let { product } = this.props;

        return (
            <div className="product">
                <img src={product.image} alt={product.productName} />
                <p className="product-name">{product.productName}</p>
                <p className="price">${product.price}</p>
                <div className="add-to-cart" onClick={() => this.addToCart(product.id)}>
                    <p>Add to cart</p>
                </div>
            </div>
        )
    }
}

export default Product;
