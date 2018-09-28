import React from 'react'

const ProductCard = (props) => {
    const { product } = props;
    return (
        <div className="col-lg-3 col-md-4 mb-3">
              <div className="card h-100">
                <img className="card-img-top" src={product.image_link} alt="Product Image" />
                <div><i className="fa fa-heart"/>Favorite Me!</div>
                <div className="card-body">
                  <h4 className="card-text">{product.name}</h4>
                  <h5 className="card-text">${product.price}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Rating: {product.rating} Star(s)</p>
                  <button>Add To Cart</button>
                </div>
              </div>
            </div>
    )
  }

export default ProductCard;
