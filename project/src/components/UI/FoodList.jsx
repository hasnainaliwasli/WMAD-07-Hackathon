import React from 'react'
import FoodCard from './FoodCard'

function FoodList({ data }) {
  // console.log(data)
  return (
    <>
      {data.map((item, index) => (

        <FoodCard key={index} item={item} />
      )
      )}
    </>
  )
}

export default FoodList