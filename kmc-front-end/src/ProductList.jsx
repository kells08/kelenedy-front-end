import React, { Component } from 'react'
import ProductCard from "./ProductCard";

class ProductList extends Component {

  constructor() {
    super();
    this.state = {
        products: []
    }
  }
  
  render() {
      
    const allProducts = this.props.products.map(product => <ProductCard product={product} addProductToFavList={this.props.addProductToFavList} />)
    return (
      <div>
        <div className = "row">
          {allProducts}
        </div>
      </div>
    )
  }
}

export default ProductList;