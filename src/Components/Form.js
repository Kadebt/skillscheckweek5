import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component{
    constructor(){
        super()
        this.state = {
            image: '',
            name: '',
            price: 0
        }
        // this.handleClickCancel = this.handleClickCancel.bind(this)
        this.handleInputImage = this.handleInputImage.bind(this)
        this.handleInputPrice = this.handleInputPrice.bind(this)
        this.handleInputName = this.handleInputName.bind(this)
        this.baseState = this.state

    }

    handleInputImage(e){
        this.setState({
            [e.target.image]: e.target.value
        })
    }
    
    handleInputPrice(e){
        this.setState({
            [e.target.price]: e.target.value
        })
    }

    handleInputName(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClickCancel(){
        this.setState(this.baseState)
    }

    render(){
        return(
            <div>
            <form>
                <input type="text" placeholder="Image URL" value={this.state.image} onChange={this.handleInputImage}/>
                <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleInputName}/>
                <input type="text" placeholder="Price" value={this.state.price} onChange={this.handleInputPrice}/>
                <button onClick={this.handleClickCancel}>Cancel</button>
                <button type="submit">Add to Inventory</button>
                </form>
            </div>
        )
    }
}
export default Form