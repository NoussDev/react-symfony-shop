import React from 'react'
import { connect } from 'react-redux'
import * as CartActions from "../store/actions/cartActions"

class Product extends React.Component{

    render(){
        return(
            <div className="col-lg-12">
                <div className="card mt-4">
                    <img className="card-img-top img-fluid" src={this.props.picture} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{this.props.title}</h3>
                        <h4>{this.props.price}€</h4>
                        <p className="card-text">{this.props.content}</p>
                        <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
                        {this.props.stars} stars
                    </div>
                    <div className="d-flex justify-content-start">
                        <button 
                            className="btn btn-primary btn-lg" 
                            onClick={ e => {this.props.addProductToCart(this.props.id,this.props.title,this.props.price)}} 
                            id="add_cart">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProp = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: (id,title,price) => {
            dispatch(CartActions.addProductToCart(id,title,price))
        }
    }
}

export default connect(
    mapStateToProp,
    mapDispatchToProps
)(Product)