import React, {Component} from 'react'

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
    const {product} = this.props;

    return (<div className="card h-100 product">
    <div className="fav-me"><i className="fa fa-heart" onClick={(e) => this.props.addProductToFavList(product)} /></div>
      <img className="card-img-top" src={product.image_link} alt="Product Image"/>

      <div className="card-body content">
        <h4 className="card-text">{product.name}</h4>
        <h4 className="card-text">${product.price}</h4>
        {
          this.state.showDetails
            ? <p className="card-text details ">{this.props.product.description}&nbsp;<span className="showDetails" onClick={this.toggleDetails}>Hide</span>
              </p>
            : <p className="card-text details ">
                {this.props.product.description.substring(0, 50)}...&nbsp;
                <span className="showDetails" onClick={this.toggleDetails}>Product details</span>
              </p>
        }
        <p className="card-text">Rating: {product.rating}&nbsp;Star(s)</p>
      </div>
      <div className="card-body">
      <button className="addtocart btn">Add To Cart</button>
      </div>
    </div>)
  }
}

export default ProductCard;
