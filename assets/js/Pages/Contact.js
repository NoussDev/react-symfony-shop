import React from 'react'
import Form from '../components/FormContact'

export default class Contact extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card contact">
                            <div className="card-header bg-primary text-white">
                                <i className="fa fa-envelope"></i> Contact us.
                            </div>
                            <div className="card-body">
                                <Form/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}