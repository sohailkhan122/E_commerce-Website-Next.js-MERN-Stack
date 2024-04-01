import React from 'react'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'

const page = ({ params }) => {
  return (
    <>
      <ProductDetails route={params} />
    </>
  )
}
export default page
