import React from 'react'

export default class Product extends React.Component{

    render(){
        return(
            <div className="col-lg-12">
                <div className="card mt-4">
                    <img className="card-img-top img-fluid" src={this.props.picture} alt=""/>
                    <div className="card-body">
                        <h3 className="card-title">{this.props.name}</h3>
                        <h4>{this.props.price}€</h4>
                        <p className="card-text">{this.props.description}</p>
                        <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734; </span>
                        {this.props.stars} stars
                    </div>
                </div>
            </div>
        )
    }
}