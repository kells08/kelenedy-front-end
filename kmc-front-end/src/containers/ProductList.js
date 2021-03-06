import React, {Component} from 'react'
import ProductCard from "../components/ProductCard";

class ProductList extends Component {

  allProducts = () => {
    console.log(this.props)
    return this.props.products.map(product => {
      return <div className="col-lg-3 col-md-4 mb-3 col-sm-6 col-xs-12"><ProductCard key={product.id} product={product} addProductToFavList={this.props.addProductToFavList}  /></div>
    })
  }

  render(){
    return (
      <div className="row">
        {this.allProducts()}
      </div>
    );
  }
}

export default ProductList;
