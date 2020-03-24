import React from "react"

//import Components
import Cards from "../components/Cards"
import HeadingRow from "../components/HeadingRow"

//Api
import API from '../common/API'

export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            products: [],
            loading: true
        }
    }

    async componentDidMount() {
        let products = await API.get('products');
        this.setState({
            products: products.data,
            loading: false
        })
        console.log(this.state.products)
    }
    render(){
        return(
                this.state.loading ?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                :
                    <div className="container">
                        <HeadingRow
                            picture={"https://i.picsum.photos/id/2/900/400.jpg"}
                            title={"Business Name or Tagline"} 
                            content={"This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!"}
                            textButton={"Call to Action !"}
                        />
                        <Cards products={this.state.products}/>
                    </div>
            )
    }
}