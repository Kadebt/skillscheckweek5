import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard'

class App extends Component{
  constructor(){
      super()
      this.state = {
        inventory: [
          {
            name: 'socks',
            price: 5,
            image: 'sdajfljdslkjfalkdsj'
          },
          {
            name: 'shirt',
            price: 20,
            image: 'jdslfkajdslkfjhh'

          }
        ]
      }
  }
  getInventory(){
    axios.get('/api/inventory').then( res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  render(){
      return(
          <div>
            <Header/>
            <Form/>
            <Dashboard
            inventory={this.state.inventory}/>

          </div>
      )
  }
}

export default App;
