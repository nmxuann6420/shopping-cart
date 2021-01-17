import './Styles/App.css';
import './Styles/Grid.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';
import Bill from './components/Bill';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    productName: 'Macbook',
                    price: 1000,
                    image: 'https://picsum.photos/id/180/2400/1600',
                    inCart: 0
                },
                {
                    id: 2,
                    productName: 'Old car',
                    price: 2000,
                    image: 'https://picsum.photos/id/111/4400/2656',
                    inCart: 0
                },
                {
                    id: 3,
                    productName: 'Shoes',
                    price: 3000,
                    image: 'https://picsum.photos/id/21/3008/2008',
                    inCart: 0
                },
            ],
        }
        this.addToCart = this.addToCart.bind(this);
        this.changeAmountItems = this.changeAmountItems.bind(this);
    }

    addToCart(id) {
        let { products } = this.state;
        products.forEach(product => {
            if (id === product.id) {
                product.inCart++;
            }
        })
        this.setState({
            products: products,
        })
        localStorage.setItem('products', JSON.stringify(products));
    }

    changeAmountItems(id, inCart) {
        if (localStorage.getItem('products') !== null) {
            let products = JSON.parse(localStorage.getItem('products'));
            for (let i = 0; i < products.length; i++) {
                if (products[i].id === id) {
                    products[i].inCart = inCart;
                    break;
                }
            }
            this.setState({
                products: products
            })
            localStorage.setItem('products', JSON.stringify(products));
        }
    }

    render() {
        let products = null;
        
        if (localStorage.getItem('products') !== null) {
            products = JSON.parse(localStorage.getItem('products'));
        } else {
            products = this.state.products;
        }

        return (
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                        <Header products={products} />
                    </div>

                    <div className="col l-12 mt-16">
                        <div className="row">
                            <div className="col l-8">
                                <Product products={products} addToCart={this.addToCart} />
                            </div>

                            <div className="col l-4">
                                <Bill products={products} changeAmountItems={this.changeAmountItems}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
