import React from 'react'
import { Col, Container, Form, FormGroup, Input, InputGroup, Row } from 'reactstrap';
import "../styles/checkout.css";
import Helmet from './../components/Helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cartAction } from '../redux/slices/CartSlice';

function Checkout() {

  const totalQuantity = useSelector((store) => store.cart.totalQuantity)
  const totalAmount = useSelector((store) => store.cart.totalAmount);
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const orderPlace = (e) => {
    e.preventDefault()

    dispatch(cartAction.clearCart())

    notify("Order Placed Successfully", "success")
    navigate('/cart')
  }


  return (
    <Helmet title={'Checkout'}>

      <section>
        <Container>
          <Row className='d-flex align-items-center'>
            <Col lg='8'>
              <Form >
                <h4 className='fs-6 fw-bold my-3'>Billing Information</h4>
                <FormGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Enter your name' required />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Enter your email' />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Phone number' />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Street Address' />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='City' />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Postal Code' />
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input className="input_info" placeholder='Country' />
                  </InputGroup>
                </FormGroup>
              </Form>

            </Col>
            <Col l='4' className='col2' >
              <div className="colm2">
                <div className='divsSpan'>
                  <span>Total Qty: </span>
                  <span>{totalQuantity} items</span>
                </div >
                <div className='divsSpan py-2'>
                  <span>Subtotal</span>
                  <span>${totalAmount}</span>
                </div>
                <div className='divsSpan'>
                  <span>
                    Shipping:
                    <p className='freeShiping'>Free Shipping</p>
                  </span>
                  <span>$0</span>
                </div>
                <hr />
                <div className='totalDivsSpan'>
                  <span>Total Cost:</span>
                  <span>${totalAmount}</span>
                </div>
                <button onClick={orderPlace} className='buy_btn checkout_btn'>Place an order</button>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}

export default Checkout