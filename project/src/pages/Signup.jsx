import React, { useState } from 'react'
import Helmet from './../components/Helmet/Helmet';
import { Col, Container, Form, FormGroup, Input, Row } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth, firestore } from './../global/firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import "../styles/auth.css"

function SignUp() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handlerSignUp = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user;
      user.displayName = userName;
      await setDoc(doc(firestore, "Users", user.uid), {
        uid: user.uid,
        displayName: user.displayName,
        email,
      })
      setIsLoading(false)
      navigate('/signin')
      notify("Account created successfully", 'success');
    } catch (error) {
      notify("Something went wrong", 'error')
      console.log(error)
    }

  }

  return (
    <Helmet title='Signup'>
      <Container className='auth_container'>
        <Row>
          <h1 className='text-center'>SignUp</h1>
          <Col lg='6' className='m-auto text-center'>
            <Form onSubmit={handlerSignUp} className='auth_form'>
              <FormGroup>
                <Input type='text' placeholder='Enter your name' onChange={(e) => setUserName(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type='email' placeholder='Enter your email' onChange={(e) => setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Input type='text' placeholder='Enter your password' onChange={(e) => setPassword(e.target.value)} />
              </FormGroup>

              <div className='botom_two'>
                <span className='btn_span'>
                <button type='submit' className="buy_btn auth_btn">
                    {isLoading ? <span className="spinner-border spinner-border-sm text-light"></span> : "SignUp"}
                  </button>
                </span>
                <p className='pt-3'>Already have an account? <Link to='/signin'>SignIn</Link></p>
              </div>
            </Form>

          </Col>
        </Row>
      </Container>
    </Helmet>
  )
}

export default SignUp