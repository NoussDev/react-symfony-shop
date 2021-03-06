import React from 'react'
import { Link } from 'react-router-dom'

export default class CardItem extends React.Component{
    render(){
        return(
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src={this.props.picture} alt="Card image cap"/>
                    <div className="card-body">
                        <h2 className="card-title">{this.props.title}</h2>
                        <p className="card-text">
                            {
                                 this.props.content.length > 150 ? this.props.content.slice(0,150) + "..." :  this.props.content
                            }
                        </p>
                    </div>
                    <div className="card-footer">
                        <span>
                            <Link to={`/shop/${this.props.id}`} className="btn btn-primary btn-sm">Go to product</Link>
                        </span>
                        <span>
                            <p className="float-right">
                                <b>{this.props.price} €</b>
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}