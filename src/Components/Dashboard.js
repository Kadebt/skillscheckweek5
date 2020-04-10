import React, { Component } from 'react'
import axios from 'axios'
import Product from './Product'

class Dashboard extends Component{
    constructor(){
        super()
       
    }
    render(){
        const Inventory = this.props.inventory.map(e => {
            return (
               <Product 
               name={e.name}
               price={e.price}
               image={e.image}/>
            )
        })
        return(
            <div>{Inventory}
                <Product/>
            </div>
        )
    }
}
export default Dashboard