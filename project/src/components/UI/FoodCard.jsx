import React from 'react'
import { Col } from 'reactstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "../../styles/foodCard.css"
import { cartAction } from '../../redux/slices/cartSlice';

function FoodCard({ item }) {

  // console.log("first:", item)


  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(cartAction.addToCart({
      id: item.id,
      productName: item.title,
      image: item.image,
      price: item.price,
      category: item.category,
      description: item.description
    }))


    notify(`Pizza Added To Cart`, 'success')
  }


  return (
    <Col lg='3' md='4' >
      <div className='mainCol my-2'>
        <div className="product_item">
          <motion.div whileHover={{ scale: 0.9 }} className="product_img">
            <img src={item.image} alt="Image" className='image' />
          </motion.div>
        </div>

        <div className="p-2 product_info">
          <h3 className="product_name"><Link to={`/shop/${item.id}`}>{item.title}</Link></h3>
          <span>{item.category}</span>
        </div>

        <div className="product_card-bottom d-flex justify-content-between p-2">
          <span className='price'>${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i className='ri-add-line'></i>
          </motion.span>
        </div>
      </div>
    </Col>
  )
}

export default FoodCard;