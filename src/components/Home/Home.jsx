import React from 'react'
import Banner from './banner/Banner'
import Blog from './blog/Blog'
import Card from './hero/Card'
import Hero from './hero/Hero'
import Price from './price/Price'
import Product from './product/Product'
import Testimonial from './testimonial/Testimonial'
import TopProduct from './topProduct/TopProduct'

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </div>
  )
}

export default Home