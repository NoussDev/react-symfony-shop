import React from 'react'

export default class CardItem extends React.Component{
    render(){
        return(
            <div className="col-md-4 mb-5">
                <div className="card h-100">
                    <div className="card-body">
                        <h2 className="card-title">{this.props.title}</h2>
                        <p className="card-text">{this.props.content}</p>
                    </div>
                    <div className="card-footer">
                        <a href="#" className="btn btn-primary btn-sm">More Info</a>
                    </div>
                </div>
            </div>
        )
    }
}