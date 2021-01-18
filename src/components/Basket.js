import React, { Component } from 'react';
import Product from './Product';

class Basket extends Component {
    
    render() {
        let { products } = this.props;

        let items = products.map((product) => {  
            return (
                <div className="col l-4" key={product.id}>
                    <Product product={product} addToCart={this.props.addToCart} />
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

export default Basket;
