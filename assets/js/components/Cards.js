import React from "react"
import CardItem from './CardItem'

export default class Cards extends React.Component{
    render(){

        const dataCards = [
            {title:"CardOne", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."},
            {title:"Card Two", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."},
            {title:"Card Three", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."}
        ]

        return(
            <div className="row">
                {
                    dataCards.map((card, index) => {
                        return(
                            <CardItem key={index} title={card.title} content={card.content} />
                        )
                    })
                }
            </div>
        )
    }
}