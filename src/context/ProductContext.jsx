import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductCont = createContext()

const ProductContext = ({children}) => {

  const [actTab, setActTab] = useState(0)

  useEffect(() => {
    axios.get('https://64d0f633ff953154bb79c672.mockapi.io/product').then(res => {
      setProduct(res.data)
    })
  },[])

    const [product, setProduct] = useState([])


  return (
    <div>
      <ProductCont.Provider value={{product, actTab, setActTab}}>
        {children}
      </ProductCont.Provider>
    </div>
  )
}

export default ProductContext
