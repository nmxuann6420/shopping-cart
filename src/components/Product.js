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
        let { products } = this.props;

        let items = products.map((product) => {  
            return (
                <div className="col l-4" key={product.id}>
                    <div className="product">
                        <img src={product.image} alt={product.productName} />
                        <p className="product-name">{product.productName}</p>
                        <p className="price">${product.price}</p>
                        <div className="add-to-cart" onClick={() => this.addToCart(product.id)}>
                            <p>Add to cart</p>
                        </div>
                    </div>
                </div>
            )
        })
        return (
            <div className="row">
                <div className="col l-12">
                    <p className="text">Products</p>
                </div>
                
                { items }
            </div>
        )
    }
}

export default Product;
