import React from "react"
import CardItem from './CardItem'

export default class Cards extends React.Component{
    render(){
        return(
            <div className="row">
                {
                    this.props.products.map((product) => {
                        return(
                            <CardItem 
                                key={product.id} 
                                picture={product.picture} 
                                title={product.title} 
                                content={product.content}
                                price={product.price}
                                id={product.id}
                            />
                        )
                    })
                }
            </div>
        )
    }
}