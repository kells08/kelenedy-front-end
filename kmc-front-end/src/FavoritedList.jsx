import React, { Component } from 'react'
import ProductCard from "./ProductCard";

class FavoritedList extends Component {
  render() {
    const yourFavList = this.props.favList.map(product => <ProductCard product={product}/>);
    
    return (
      <div>
        {yourFavList}
      </div>
    )
  }
}

export default FavoritedList;