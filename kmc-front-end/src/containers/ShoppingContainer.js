import React, {Component} from 'react'
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "./ProductList";
import FavoritedList from "./FavoritedList";

class ShoppingContainer extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      favoritedProducts: [],
      showDetails: null,
      filterBy: 'None'
    }
  }

  componentDidMount = () => {
    this.fetchProducts('maybelline')
    // this.filterProducts2()
  }

  fetchProducts = (searchTerm) => {
    // console.log(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_tags=${searchTerm}`)
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchTerm}`).then(res => res.json()).then(products => {
      this.addProductToState(products)
    })
  }


  addProductToState = (products) => {
    this.setState({products: products})
  }

  addProductToFavList = (product) => {
    console.log(product)
    if (!this.state.favoritedProducts.includes(product)) {
      this.setState(state => {
        state.favoritedProducts.push(product)
      return state
      })
    }
  }

  removeProductToFavList = (product) => {
    this.setState(state => {
      let index = state.favoritedProducts.indexOf(product)
      state.favoritedProducts.splice(index,1)
      return state
    })
  }

  onFilterChange = (filterBy) => {
    this.setState({
      filterBy: filterBy
    },() => console.log(this.state))
  }

  // filterProducts2 = () => {
  //   let product_type = this.state.products.map(product => product.product_type)
  //
  //   let options = [...new Set(product_type)]
  //   options.push('None')
  //   state changes so this doesnt work
  //
  //   let productResults = [ ...this.state.products]
  //
  //   for (let i = 0; i < options.length; i++) {
  //   if(this.state.filterBy === options[i]) {
  //     productResults = productResults.filter(product => product.product_type === options[i])
  //   }
  //   return productResults
  // }
  // }

  filterProducts = () => {
  let productResults = [ ...this.state.products]
    if(this.state.filterBy === 'bronzer') {
      productResults = productResults.filter(product => product.product_type === 'bronzer')
    }
    if(this.state.filterBy === 'blush') {
      productResults = productResults.filter(product => product.product_type === 'blush')
    }
    if(this.state.filterBy === 'lip_liner') {
      productResults = productResults.filter(product => product.product_type === 'lip_liner')
    }
    if(this.state.filterBy === 'foundation') {
      productResults = productResults.filter(product => product.product_type === 'foundation')
    }
    if(this.state.filterBy === 'eyeshadow') {
      productResults = productResults.filter(product => product.product_type === 'eyeshadow')
    }
    if(this.state.filterBy === 'eyeliner') {
      productResults = productResults.filter(product => product.product_type === 'eyeliner')
    }
    if(this.state.filterBy === 'nail_polish') {
      productResults = productResults.filter(product => product.product_type === 'nail_polish')
    }
    if(this.state.filterBy === 'lipstick') {
      productResults = productResults.filter(product => product.product_type === 'lipstick')
    }
    if(this.state.filterBy === 'eyebrow') {
      productResults = productResults.filter(product => product.product_type === 'mascara')
    }
    if(this.state.filterBy === 'eyebrow') {
      productResults = productResults.filter(product => product.product_type === 'mascara')
    }
  return productResults
}

  render() {
    // console.log(this.state.products)
    // debugger
    return (<div>
      <div className="container-fluid">
      <section>
        <div className="row">
          <div className="col-md-12">
            <span className="options"><SearchBar fetchProducts={this.fetchProducts}/></span>
            <span className="options"><Filters products={this.state.products}  onFilterChange={this.onFilterChange}/></span>
          </div>
        </div>
        </section>
        <section className="products">
        <div className="row">
          <div className="col-md-9">
            {
              this.state.products.length > 0
                ? <ProductList products={this.filterProducts()} addProductToFavList={this.addProductToFavList} />
                : <p>Loading...</p>
            }
          </div>
          <div className="col-md-3">
            <h3>Favorite List</h3>
            {
              this.state.favoritedProducts.length > 0 ?
            <FavoritedList favList={this.state.favoritedProducts} removeProductToFavList={this.removeProductToFavList} />
              : <p>Currently No Favorites</p>
            }
          </div>
        </div>
        </section>
      </div>
    </div>)
  }
}

export default ShoppingContainer;
