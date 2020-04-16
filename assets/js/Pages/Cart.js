import React, { Component } from "react"
import RowCart from "../components/RowCart"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import * as CartActions from "../store/actions/cartActions"

class Cart extends Component{

    constructor(){
        super()
        this.state={
            SubTotal:0,
            Shipping: 6.90,
            Total: 0
        }
    }

    updateMoneyPayment = (price, action) => {
        var sub
        switch(action){
            case 'ADD':
                sub = Number(this.state.SubTotal) + Number(price)
                break
            case 'DEL':
                sub = Number(this.state.SubTotal) - Number(price)
                break
        }
        var total = sub + Number(this.state.Shipping)
        this.setState({
           SubTotal: sub.toFixed(2),
           Total: total.toFixed(2)
       })
    }

    componentDidMount = () => {
        console.log(this.props.cart)
        var price = 0
        this.props.cart.map((item) => {
            price += item.product.price
        })
        this.updateMoneyPayment(price, "ADD")
    }

    deleteProductToCart = (id) => {
        var info = this.props.cart.filter(idProdut => idProdut.product.id === id)
        this.updateMoneyPayment(info[0].product.price, "DEL")
        this.props.deleteProductToStore(id)
    }

    render(){
        return(
                this.props.cart.length <= 1 ?
                    <div className="container mb-4">
                        <div className="row">
                            <div className="col-12">
                                <div className="alert alert-primary mt-4" role="alert">
                                    <h2 className="text-center">Your cart is empty</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-2">
                            <div className="row">
                                <div className="col-sm-12  col-md-6">
                                    <Link to={"/"} className="btn btn-block btn-light">Continue Shopping</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                :
                <div className="container mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Product</th>
                                            <th scope="col" className="text-center">Quantity</th>
                                            <th scope="col" className="text-right">Price</th>
                                            <th> </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            this.props.cart.map((row) => {
                                                return(
                                                    row.product.id === "" ?
                                                    null
                                                    :
                                                    <RowCart
                                                        key={row.product.id}
                                                        picture={row.product.picture}
                                                        title={row.product.title}
                                                        quantity={1}
                                                        price={row.product.price}
                                                        onClick={e => this.deleteProductToCart(row.product.id)}
                                                    />
                                                )
                                            })
                                        }
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Sub-Total</td>
                                            <td className="text-right">{this.state.SubTotal} €</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>Shipping</td>
                                            <td className="text-right">{this.state.Shipping} €</td>
                                        </tr>
                                        <tr>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td><strong>Total</strong></td>
                                            <td className="text-right"><strong>{this.state.Total} €</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col mb-2">
                                <div className="row">
                                    <div className="col-sm-12  col-md-6">
                                        <Link to={"/"} className="btn btn-block btn-light">Continue Shopping</Link>
                                    </div>
                                    <div className="col-sm-12 col-md-6 text-right">
                                        <button className="btn btn-lg btn-block btn-success text-uppercase">Checkout</button>
                                    </div>
                                </div>
                            </div>
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

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProductToStore: (id) => {
            dispatch(CartActions.deleteProductToCart(id))
        }
    }
}

export default connect(
    mapStateToProp,
    mapDispatchToProps
    )(Cart)