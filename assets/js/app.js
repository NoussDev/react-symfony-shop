require('../css/app.css')

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Navigation from './components/Navigation';
import ShopItem from './Pages/ShopItem';
import Contact from './Pages/Contact';

import { createStore } from "redux"
import rootReducer from "./store/reducers"
import { Provider } from "react-redux"
import Cart from './Pages/Cart';

const store = createStore(rootReducer)


export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Navigation>
                    <Route 
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        path="/shop/:id"
                        component={ShopItem}
                    />
                    <Route
                        path="/contact"
                        component={Contact}
                    />
                    <Route
                        path="/cart"
                        component={Cart}
                    />
                </Navigation>
            </Router>

        )
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'));