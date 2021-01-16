import './Styles/App.css';
import './Styles/Grid.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Product from './components/Product';

class App extends Component {
    render() {
        return (
            <div className="grid wide">
                <div className="row">
                    <div className="col l-12">
                        <Header />
                    </div>

                    <div className="col l-12 mt-16">
                        <div className="row">
                            <div className="col l-8">
                                <Product />
                                {/* <div className="row">
                                    <div className="col l-12">
                                        <div className="box1"></div>
                                    </div>
                                </div> */}
                            </div>

                            <div className="col l-4">
                                <div className="box2">
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
