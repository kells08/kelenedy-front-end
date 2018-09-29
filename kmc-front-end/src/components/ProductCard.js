import React, { Component } from 'react'

class ProductCard extends Component {

  state = {
    showDetails: false
  }

  toggleDetails = () => {
    this.setState({
      showDetails: !this.state.showDetails
    }, () => console.log(this.state))
  }


  render() {
  const { product } = this.props;

  return (
    <div className="card h-100">
      <img className="card-img-top" src={product.image_link} alt="Product Image"/>
      <div className="fav-me"><i className="fa fa-heart" onClick={(e) => this.props.addProductToFavList(product)}/>Favorite Me!</div>
      <div className="card-body">
        <h4 className="card-text">{product.name}</h4>
        <h5 className="card-text">${product.price}</h5>
        {this.state.showDetails ? <p className="card-text details ">{this.props.product.description}<span onClick={this.toggleDetails}>Hide</span></p> : <p className="card-text details "> {this.props.product.description.substring(0,50)}...&nbsp;
        <span onClick={this.toggleDetails}>Product details</span></p>
        }
        <p className="card-text">Rating: {product.rating}
           Star(s)</p>
        <button>Add To Cart</button>
      </div>
    </div>
    )
  }
}

export default ProductCard;
