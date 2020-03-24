require('../css/app.css')

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Navigation from './components/Navigation';
import ShopItem from './Pages/ShopItem';
import Contact from './Pages/Contact';


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
                </Navigation>
            </Router>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));