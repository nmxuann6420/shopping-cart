import React, { Component } from 'react';


class Bill extends Component {
    constructor(props) {
        super(props);
        this.changeAmountItems = this.changeAmountItems.bind(this);
    }

    changeAmountItems(e, id, inCart) {
        if (e.target.classList.contains('btn-plus')) {
            (inCart < 30) ? inCart++ : (inCart = 30);
        } else {
            inCart--;
        }
        this.props.changeAmountItems(id, inCart);
    }

    render() {
        let { products } = this.props;
        let a = '', flag = false;
        for (let i = 0; i < products.length; i++) {
            if (products[i].inCart !== 0) {
                flag = true;
                break;
            }
        }

        if (flag) {
            let shippingPrice = 50, taxPrice = 0, total = 0, itemPrice = 0;
            let productItems = products.map(product => {
                if (product.inCart !== 0) {
                    (product.inCart > 1) ? (shippingPrice = 0) : (shippingPrice = 50);
                    taxPrice += (product.inCart * 140);
                    itemPrice += (product.inCart * product.price);
                    total += (product.inCart * product.price) + taxPrice;
                    return (
                        <li className="product-item">
                            <p className="product-name">{product.productName}</p>
                            <div>
                                <button className="btn btn-plus" onClick={(e) => this.changeAmountItems(e, product.id, product.inCart)}>+</button>
                                <button className="btn btn-minus" onClick={(e) => this.changeAmountItems(e, product.id, product.inCart)}>-</button>
                            </div>
                            <span className="number">
                                {product.inCart} x <span className="price">${product.price}.00</span>
                            </span>
                        </li>
                    )
                }
                
            })
            a = (
                <div>
                    <ul className="list-items">
                        { productItems }
                    </ul>
                    <div className="total-bill">
                        <div>
                            <p>Items price</p>
                            <p>Tax price</p>
                            <p>Shipping price</p>
                            <p>Total price</p>
                        </div>
                        <div>
                            <p>${itemPrice}.00</p> 
                            <p>${taxPrice}.00</p>
                            <p>${shippingPrice}.00</p>
                            <p>${total}.00</p>
                        </div>
                    </div>
                </div>
            )
        } else {
            a = <p className="empty active">Cart is empty</p>
        }

        return (
            <div className="bill">
                <p className="text">Cart items</p>
                <div className="order-items">
                    { a }
                </div>
            </div>
        )
    }
}

export default Bill;
