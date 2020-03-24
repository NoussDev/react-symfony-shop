import React from 'react'

export default class HeadingRow extends React.Component{
    render(){
        return(
            <div className="row align-items-center my-5">
                <div className="col-lg-7">
                    <img className="img-fluid rounded mb-4 mb-lg-0"src={this.props.picture} alt=""/>
                </div>
                <div className="col-lg-5">
                    <h1 className="font-weight-light">{this.props.title}</h1>
                    <p>{this.props.content}</p>
                    <a className="btn btn-primary" href="#">{this.props.textButton}</a>
                </div>
            </div>
        )
    }
}