import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends React.Component{
    render(){
        console.log((this.props.cart.length - 1))
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/contact"}>
                                        Contact
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/cart"}>
                                        <i className="fa fa-shopping-cart"></i> Cart :
                                        <span style={{color: "white"}}> {(this.props.cart.length - 1) === 0 ? 0 : (this.props.cart.length - 1)}</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {this.props.children}
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProp)(Navigation)