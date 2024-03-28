import React from 'react'
import Header from '../../Components/Header/header'
import Footer from '../../Components/Footer/Footer'
import ProductDetails from '../../Components/ProductDetails/ProductDetails'

const page = ({ params }) => {
  return (
    <>
      <ProductDetails route={params} />
    </>
  )
}
export default page
