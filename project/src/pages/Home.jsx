import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap';
import imgHero from "../assets/images/Rectangle_44.png"
import "../styles/home.css"
import foodData from '../assets/data/fooddata';
import FoodList from './../components/UI/FoodList';

function Home() {

  const [foodDataSet, setFoodSet] = useState(foodData)
  const [pizza, setPizza] = useState([])
  const [burger, setBurger] = useState([])
  const [chicken, setChicken] = useState([])

  useEffect(() => {

    const filteredSpecial = foodData.filter((item) => item.category === 'pizza')
    setPizza(filteredSpecial)

    const filteredBurger = foodData.filter((item) => item.category === 'burger')
    setBurger(filteredBurger)

    const filteredChicken = foodData.filter((item) => item.category === 'chicken')
    setChicken(filteredChicken)


  }, [])



  return (
    <>

      <Container>

        {/* Hero Section */}
        <section className='fist_section'>
          <Row >
            <Col lg='8' >
              <div className="left_hero_contents">
                <h4>Place to to get a great quality as well as quantity</h4>
                <h1>Eat healthy ,Live longer</h1>
              </div>
            </Col>
            <Col lg='4'>
              <img src={imgHero} alt="" />
            </Col>
          </Row>
        </section>


        {/*  */}
        <section className="trending_products ">

          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title pb-4'>Pizzas</h2>
              </Col>

              <FoodList data={pizza} />
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title py-5'>Burger</h2>
              </Col>

              <FoodList data={burger} />
            </Row>
          </Container>

          <Container>
            <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title py-5'>Chicken</h2>
              </Col>

              <FoodList data={chicken} />
            </Row>
          </Container>

        </section>
      </Container>

    </>
  )
}

export default Home