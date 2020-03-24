import React from "react"
import CardItem from './CardItem'

export default class Cards extends React.Component{
    render(){

        const dataCards = [
            {id:1, picture:"https://i.picsum.photos/id/10/900/400.jpg", title:"CardOne", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."},
            {id:2, picture:"https://i.picsum.photos/id/20/900/400.jpg", title:"Card Two", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."},
            {id:3, picture:"https://i.picsum.photos/id/30/900/400.jpg", title:"Card Three", content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem magni quas ex numquam, maxime minus quam molestias corporis quod, ea minima accusamus."}
        ]

        return(
            <div className="row">
                {
                    dataCards.map((card) => {
                        return(
                            <CardItem key={card.id} picture={card.picture} title={card.title} content={card.content} id={card.id}/>
                        )
                    })
                }
            </div>
        )
    }
}