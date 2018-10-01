import React, {Component} from 'react'

class Cart extends Component {
  render() {
    return (<div className='container cart'>
      <table id="cart" class="table table-hover table-condensed">
        <thead>
          <tr>
            <th style={{width:"60%"}}>Product</th>
            <th style={{width:"10%"}}>Price</th>
            <th style={{width:"8%"}}>Quantity</th>
            <th style={{width:"12%"}} className="text-center">Subtotal</th>
            <th style={{width:"10%"}}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-th="Product">
              <div className="row">
                <div className="col-sm-10 hidden-xs"><img src="http://placehold.it/100x100" alt="..." className="img-responsive"/></div>
                <div className="col-sm-10">
                  <h4 className="nomargin">Product 1</h4>
                  <p>Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </td>
            <td data-th="Price">$1.99</td>
            <td data-th="Quantity">
              <input type="number" className="form-control text-center" /></td>
              <td data-th="Subtotal" className="text-center">1.99</td>
              <td className="actions" data-th="">
              <i class="fa fa-refresh" />
              <i class="fa fa-trash" />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="visible-xs">
              <td className="text-center">
                <strong>Total 1.99</strong>
              </td>
            </tr>
            <tr>
              <td>
                <a href="#" className="btn">
                  <i className="fa fa-angle-left"></i>
                  Continue Shopping</a>
              </td>
              <td colSpan="2" className="hidden-xs"></td>
              <td className="hidden-xs text-center">
                <strong>Total $1.99</strong>
              </td>
              <td>
                <a href="#" className="btn">Checkout
                  <i className="fa fa-angle-right"></i>
                </a>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      )
    }
  }

export default Cart;
