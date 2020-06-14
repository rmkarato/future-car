import React from 'react';

import Home from './Home';
import Vender from './Vender';
import Comprar from './Comprar';


class AppContainer extends React.Component {
  state = {
   currentPage: "HomePage"
  }

  changePageA = () => {
    if(this.state.currentPage === "HomePage") {
      this.setState({ currentPage: "ShopPage"})
    } 
  }

  changePageB = () => {
   if(this.state.currentPage === "HomePage") {
     this.setState({ currentPage: "SellPage"})
   } 
 }

  changePageC = () => {
    if(this.state.currentPage === "ShopPage") {
      this.setState({ currentPage: "SellPage"})
    } 
  }

  changePageD = () => {
    if(this.state.currentPage === "SellPage") {
      this.setState({ currentPage: "ShopPage"})
    } 
  }

  render() {

    if(this.state.currentPage === "HomePage") {
      return (
        <Home 
        changePageSell={this.changePageB}
        changePageShop={this.changePageA}/>
      ) 
    } else if (this.state.currentPage === "ShopPage") {
      return (
        <Comprar 
        changePage1={this.changePageC}/> 
      )
    } else if (this.state.currentPage === "SellPage") {
      return (
        <Vender
        changePage2={this.changePageD}/> 
      )
    } 
  }
}

export default AppContainer
