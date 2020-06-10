import React, { Component } from 'react'

import Vender from './Vender'
import Comprar from './Comprar'

export class AppContainer extends Component {
  state = {
    queroComprar: false,
    queroVender: false,
  }

  onClickQueroComprar = () => {
    this.setState({ queroComprar: !this.state.queroComprar})
  }

  onClickQueroVender = () => {
    this.setState({ queroVender: !this.state.queroVender})
  }

  render() {
    if(this.state.queroComprar) {
      return <Comprar />  
    }
    
    if(this.state.queroVender) {
      return <Vender />
    }
    
      return (
        <div>
          <button onClick={this.onClickQueroComprar}>Quero Comprar</button>
          <button onClick={this.onClickQueroVender}>Quero Vender</button>
        </div>
      )
    }
}

