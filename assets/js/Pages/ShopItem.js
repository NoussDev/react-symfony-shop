import React from "react"
import { Link } from "react-router-dom"
import Product from "../components/Product"


export default class ShopItem extends React.Component{
    render(){
        return(
            <div className="container">
                    <Link to={"/"} className="btn btn-primary btn-sm"><span className="glyphicon glyphicon-arrow-left"></span>Back</Link>
                <div className="row">
                    <Product
                        picture={"https://i.picsum.photos/id/2/900/400.jpg"}
                        name={"Product Name"}
                        price={24.99}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!"}
                        stars={4.0}
                    />
                </div>
            </div>
        )
    }
}