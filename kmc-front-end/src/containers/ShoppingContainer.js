import React, {Component} from 'react'
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import ProductList from "./ProductList";
import FavoritedList from "./FavoritedList";
import './ShoppingContainer.css';
// import LoginForm from "../components/LoginForm";

class ShoppingContainer extends Component {

  constructor() {
    super();
    this.state = {
      products: [],
      favoritedProducts: [],
      showDetails: null,
      filterBy: 'None',
      productType: []
    }
  }

  componentDidMount = () => {
    this.fetchProducts('maybelline')
    this.scrollFunction()
  }

  fetchProducts = (searchTerm) => {
    // console.log(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline&product_tags=${searchTerm}`)
    fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?brand=${searchTerm}`).then(res => res.json()).then(products => {
      this.addProductToState(products)
      this.addProductTypeToState(products)
    })
  }

  addProductToState = (products) => {
    this.setState({products: products})
  }

  addProductTypeToState = (products) => {
    let product_type = this.state.products.map(product => product.product_type)
    let options = [...new Set(product_type)]
    options.unshift('None')

    this.setState({productType: options})
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
      state.favoritedProducts.splice(index, 1)
      return state
    })
  }

  onFilterChange = (filterBy) => {
    // destructive
    // this.setState({
    //   filterBy: filterBy,
    //   products: this.state.products.filter(product => product.product_type === filterBy)
    // },() => console.log(this.state))
    this.setState({
      filterBy: filterBy
    }, () => console.log(this.state))
  }

  filterProducts = () => {
    let productResults = [...this.state.products]
    this.state.filterBy === 'None'
      ? productResults = [...this.state.products]
      : productResults = productResults.filter(product => product.product_type === this.state.filterBy)
    return productResults
    // console.log(productResults)
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollBtn").style.display = "block";
    } else {
      document.getElementById("scrollBtn").style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (<div className="main-content">
      <h3 className="Shop-header"></h3>

      <div className="container-fluid">

        <i class="fa fa-arrow-up" onClick={this.topFunction} id="scrollBtn"/>
        <section className="searchfilter">
          <div className="row">
            <div className="col-md-12">

              <span className="options"><SearchBar fetchProducts={this.fetchProducts}/></span>
              <span className="options"><Filters products={this.state.products} productType={this.state.productType} onFilterChange={this.onFilterChange}/></span>
            </div>
          </div>
        </section>
        <section className="products">
          <div className="row">
            <div className="col-md-9 col-sm-12">
              {
                this.state.products.length > 0
                  ? <ProductList products={this.filterProducts()} addProductToFavList={this.addProductToFavList}/>
                  : <p>Loading...</p>
              }
            </div>
            <div className="col-md-3 col-sm-6">
              <h4 className="subtitle">Favorite List</h4>
              {
                this.state.favoritedProducts.length > 0
                  ? <FavoritedList favList={this.state.favoritedProducts} removeProductToFavList={this.removeProductToFavList}/>
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
