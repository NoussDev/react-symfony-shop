import React from "react"
import { Link } from "react-router-dom"
import Product from "../components/Product"

//Api
import API from '../common/API'

export default class ShopItem extends React.Component{
    constructor(){
        super()
        this.state = {
            product: [],
            loading: true
        }
    }

    async componentDidMount() {
        let idProduct = this.props.match.params.id
        let product = await API.get('products/'+idProduct);
        this.setState({
            product: product.data,
            loading: false
        })
    }
    render(){
        return(
            <div className="container">
                    <Link to={"/"} className="btn btn-primary btn-lg" id="back"><i className="fa fa-arrow-left"></i> Back</Link>
                    {
                        this.state.loading ?
                            <div className="container">
                                <div className="d-flex spinner">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        :
                        <div className="row">
                            <Product
                                id={this.state.product.id}
                                picture={this.state.product.picture}
                                title={this.state.product.title}
                                price={this.state.product.price}
                                content={this.state.product.content}
                                stars={this.state.product.stars}
                            />
                        </div>
                    }
            </div>
        )
    }
}