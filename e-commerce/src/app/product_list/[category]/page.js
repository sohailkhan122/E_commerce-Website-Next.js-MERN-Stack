'use client'
import React from 'react'
import ProductList from '../../Components/ProductListDetails'

const page = ({ params }) => {
  return (<>
    <ProductList route={params} />
  </>
  )
}
export default page