import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="title">Small Shopping Cart</h1>
                <p>
                    Cart <span className="in-cart">1</span>
                </p>
            </div>
        )
    }
}

export default Header;
