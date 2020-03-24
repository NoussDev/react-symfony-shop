require('../css/app.css')

import React from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Pages/Home';
import Navigation from './components/Navigation';
import ShopItem from './Pages/ShopItem';


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
                        path="/shop"
                        component={ShopItem}
                    />
                </Navigation>
            </Router>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));