import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { products } = this.props;
        let totalInCart = 0;
        for (let i = 0; i < products.length; i++) {
            totalInCart += products[i].inCart;
        }
        
        return (
            <div className="header">
                <h1 className="title">Small Shopping Cart</h1>
                <p>
                    Cart <span className="in-cart">{totalInCart}</span>
                </p>
            </div>
        )
    }
}

export default Header;
