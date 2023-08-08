import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'

export const ProductCont = createContext()

const ProductContext = ({children}) => {

  const [actTab, setActTab] = useState('Всі')
  const [pagPage, setPagPage] = useState(1)

  const sortList = actTab == 'Всі' ? '' : `cat=${actTab}`;


  useEffect(() => {
    axios.get(`https://64d0f633ff953154bb79c672.mockapi.io/product?${sortList}&page=${pagPage}&limit=4`).then(res => {
      setProduct(res.data)
    })
  },[actTab, pagPage])

    const [product, setProduct] = useState([])


  return (
    <div>
      <ProductCont.Provider value={{product, actTab, setActTab, setPagPage}}>
        {children}
      </ProductCont.Provider>
    </div>
  )
}

export default ProductContext
