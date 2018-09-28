import React, { Component } from 'react'
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import ProductList from "./ProductList";
import FavoritedList from "./FavoritedList";


class ShoppingContainer extends Component {

  constructor() {
    super();
    this.state = {
        products: [],
        favoritedProducts: [],
    }
  }

  componentDidMount = () => {
    this.fetchProducts()
}

  fetchProducts = () => {
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
    .then(res => res.json())
    .then(products => {
        this.addProductToState(products)
    })
}

  addProductToState = (products) => {
    this.setState({
      products: products
    })
  }

  addProductToFavList = (newProduct) => {
    if(!this.state.favoritedProducts.includes(newProduct)){
        this.setState({
            favoritedProducts: [...this.state.favoritedProducts, newProduct]
        })
    }
  }

  render() {
    // console.log(this.state.products)
    // debugger
    return (
      <div>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div><SearchBar /></div><br/>
                    <Filter />
                    {this.state.products ? <ProductList products={this.state.products} addProductToFavList={this.addProductToFavList}/> : <p>Loading</p>}
                    <p>Favorite List</p>
                    <FavoritedList favList={this.state.favoritedProducts}/>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default ShoppingContainer;
