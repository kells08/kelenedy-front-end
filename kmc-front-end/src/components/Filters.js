import React from 'react'

const Filters = (props) => {

  let product_type = props.products.map(product => product.product_type)

  let options = [...new Set(product_type)]
  options.push('None')

  this.optionsProductType = () => {
    return options.map(option => <option key={option}>{option}</option>)
  }


  return (
    <React.Fragment>
      <label>Filter By:</label>
      <select onChange={(e) => {props.onFilterChange(e.target.value)}}>
      {this.optionsProductType()}
      </select>
    </React.Fragment>
  )
}

export default Filters;
