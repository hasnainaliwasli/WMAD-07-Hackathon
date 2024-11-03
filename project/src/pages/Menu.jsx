import React, { useEffect, useState } from 'react'
import FoodList from './../components/UI/FoodList';
import foodData from './../assets/data/foodData';
import { Col, Container, Row } from 'reactstrap';


function Menu() {

  const [pizza, setPizza] = useState([])
  const [burger, setBurger] = useState([])
  const [chicken, setChicken] = useState([])
  const [sandwitch, setSandwitch] = useState([])
  const [fish, setFish] = useState([])
  const [bbq, setBbq] = useState([])
  const [beef, setBeef] = useState([])
  const [daal, setDaal] = useState([])

  useEffect(() => {

    const filteredSpecial = foodData.filter((item) => item.category === 'pizza')
    setPizza(filteredSpecial)

    const filteredBurger = foodData.filter((item) => item.category === 'burger')
    setBurger(filteredBurger)

    const filteredDaal = foodData.filter((item) => item.category === 'daal')
    setDaal(filteredDaal)

    const filteredBbq = foodData.filter((item) => item.category === 'bbq')
    setBbq(filteredBbq)

    const filteredBeef = foodData.filter((item) => item.category === 'beef')
    setBeef(filteredBeef)

    const filteredFish = foodData.filter((item) => item.category === 'fish')
    setFish(filteredFish)

    const filteredsandwitch = foodData.filter((item) => item.category === 'sandwitch')
    setSandwitch(filteredsandwitch)

    const filteredChicken = foodData.filter((item) => item.category === 'chicken')
    setChicken(filteredChicken)


  }, [])


  return (
    <>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Burger</h2>
          </Col>
          <FoodList data={burger} />
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Pizza</h2>
          </Col>
          <FoodList data={pizza} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Chicken</h2>
          </Col>
          <FoodList data={chicken} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Beef</h2>
          </Col>
          <FoodList data={beef} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Daal</h2>
          </Col>
          <FoodList data={daal} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>BBQ</h2>
          </Col>
          <FoodList data={bbq} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Sandwitch</h2>
          </Col>
          <FoodList data={sandwitch} />
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section_title pb-4 my-5'>Fish</h2>
          </Col>
          <FoodList data={fish} />
        </Row>
      </Container>

    </>
  )
}

export default Menu