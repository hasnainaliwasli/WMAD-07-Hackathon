import React from 'react'
import Helmet from './../components/Helmet/Helmet';
import { Col, Container, Row } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { cartAction } from '../redux/slices/CartSlice';
import { Link } from 'react-router-dom';
import "../styles/cart.css"

function Cart() {

  const cartItems = useSelector((store) => store.cart.cartItem) || []
  const totalAmount = useSelector((store) => store.cart.totalAmount)

  console.log("totalmat:", cartItems)

  return (
    <Helmet title='Cart'>
      <section>
        <Container>
          <Row>
            <Col lg='8'>

              {cartItems.length === 0 ?
                <h1 className='text-center fw-bold my-5 fs-4' >No Item Added To the Cart!</h1>
                :
                (<table className="table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Title</th>
                      <th>Price</th>
                      <th>Qty</th>
                      <motion.th whileTap={{ scale: 1.2 }}>Delete</motion.th>
                    </tr>
                  </thead>

                  <tbody>
                    {cartItems.map((item, index) => (
                      <TR item={item} key={index} />
                    ))}
                  </tbody>
                </table>)
              }
            </Col>


            <Col lg='4' className='right_col'>
              <div>
                <div className='d-flex fs-4 align-Items-center justify-content-between'>Subtotal
                  <span className='fs-4 fw-bold'>${totalAmount}</span>
                </div>
              </div>
              <p className='fs-6 mt-2'>Taxes and shipping will calculate in checkout</p>
              <button className='buy_btn w-100'><Link to='/'>Continue Shopping</Link></button>
              {cartItems.length > 0  && <button className='buy_btn w-100'><Link to='/checkout'>Checkout</Link></button>}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const TR = ({ item }) => {

  const dispatch = useDispatch()

  // console.log("alll  Prices: ", item)

  const deleteHadle = () => {
    console.log("delete handleb clic")
    dispatch(cartAction.deleteFromCart(item.id))
  }

  return (
    <tr>
      <td><img src={item.image} alt="Product" /></td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}</td>
      <td>
        <i onClick={deleteHadle} className='ri-delete-bin-line'></i>
      </td>
    </tr >
  )
}
export default Cart;
