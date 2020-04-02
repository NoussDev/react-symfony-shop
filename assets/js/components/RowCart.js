import React, { Component } from "react"

export default class RowCart extends Component{
    render(){
        return(
            <tr>
                <td><img src={this.props.picture} style={{width: "150px", height: "auto"}}/> </td>
                <td>{this.props.title}</td>
                <td><input className="form-control" type="number" defaultValue={this.props.quantity} /></td>
                <td className="text-right">{this.props.price}</td>
                <td className="text-right"><button className="btn btn-sm btn-danger" onClick={this.props.onClick}><i className="fa fa-trash"></i> </button> </td>
            </tr>
        )
    }
}