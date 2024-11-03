import React, { useState } from 'react'
import Helmet from './../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './../global/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import "../styles/auth.css"


function SignIn() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handlerSignin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      setIsLoading(false)
      navigate('/')
      notify("Signin Sucessfull", 'success')
    } catch (error) {
      notify("Something went wrong", 'error')
      setIsLoading(false)
      console.log(error)
    }

  }

  return (
    <Helmet title='SignIn'>
      <div className="main">
        <Container className='auth_container'>
          <Row >
            <h1 className='text-center'>SignIn</h1>
            <Col lg='6' className='m-auto text-center '>
              <Form onSubmit={handlerSignin} className='auth_form'>
                <FormGroup>
                  <Input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup>
                  <Input type='text' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
                </FormGroup>

                <div className='botom_two'>
                  <span className='btn_span'>
                    <button type='submit' className="buy_btn auth_btn">
                      {isLoading ? <span className="spinner-border spinner-border-sm text-light"></span> : "SignIn"}
                    </button>
                  </span>
                  <p className='pt-3'>
                    Don't have an account? <Link to='/signup'>Create an account</Link>
                  </p>
                </div>

              </Form>

            </Col>
          </Row>
        </Container>
      </div>
    </Helmet>
  )
}

export default SignIn