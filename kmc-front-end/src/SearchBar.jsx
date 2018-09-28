import React, { Component } from 'react'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="text" id="current-search" placeholder="Search"></input>
        
        <button><i className="fa fa-search"/> Search</button>
      </div>
    )
  }
}

export default SearchBar;