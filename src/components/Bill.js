import React, { Component } from 'react';


class Bill extends Component {
    render() {
        return (
            <div className="bill">
                <p className="text">Cart items</p>
                <div className="order-items">
                    <p className="empty active">Cart is empty</p>
                    <ul className="list-items">
                        <li className="product-item">
                            <p className="product-name">Macbook</p>
                            <div>
                                <button className="btn btn-plus">+</button>
                                <button className="btn btn-minus">-</button>
                            </div>
                            <span className="number">
                                3 x <span className="price">$1000</span>
                            </span>
                        </li>
                        <li className="product-item">
                            <p className="product-name">Macbook</p>
                            <div>
                                <button className="btn btn-plus">+</button>
                                <button className="btn btn-minus">-</button>
                            </div>
                            <span className="number">
                                3 x <span className="price">$1000</span>
                            </span>
                        </li>
                        <li className="product-item">
                            <p className="product-name">Macbook</p>
                            <div>
                                <button className="btn btn-plus">+</button>
                                <button className="btn btn-minus">-</button>
                            </div>
                            <span className="number">
                                3 x <span className="price">$1000</span>
                            </span>
                        </li>
                    </ul>
                    <div className="total-bill">
                        <div>
                            <p>Items price</p>
                            <p>Tax price</p>
                            <p>Shipping price</p>
                            <p>Total price</p>
                        </div>
                        <div>
                            <p>$9200</p> 
                            <p>$1288</p>
                            <p>$0</p>
                            <p>$10488</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bill;
