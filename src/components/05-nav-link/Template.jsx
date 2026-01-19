import React from 'react'
import { Outlet } from 'react-router'

import Header from './Header'
import Footer from './Footer'

const Template = () => {
  return (
    <>
      <Header/>
        <section>
          <Outlet/> 
        </section>
      <Footer/>
    </>
  )
}

export default Template