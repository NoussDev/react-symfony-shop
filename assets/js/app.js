import React from 'react'
import ReactDOM from 'react-dom';

//css
import '../css/small-business.css'

//import Components
import Navigation from './components/Navigation'
import HeadingRow from './components/HeadingRow'
import Cards from './components/Cards';


export default class App extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <div className="container">
                    <HeadingRow />
                    <Cards />
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));