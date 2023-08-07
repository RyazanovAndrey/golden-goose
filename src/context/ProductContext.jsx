import React, { createContext, useState } from 'react'

export const ProductCont = createContext()

const ProductContext = ({children}) => {

    const [product, setProduct] = useState([
        {id: 1, title: 'Салат “Цезар”', price: 175, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 2, title: 'Салат “Цезар”', price: 150, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 3, title: 'Салат “Цезар”', price: 350, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 4, title: 'Салат “Цезар”', price: 250, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 1, title: 'Салат “Цезар”', price: 175, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 2, title: 'Салат “Цезар”', price: 150, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 3, title: 'Салат “Цезар”', price: 350, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
        {id: 4, title: 'Салат “Цезар”', price: 250, desc: 'Lorem ipsum dolor sit amet consectetur. Habitant lorem nisl eget pretium et eget. Mauris gravida sed purus varius facilisis eget mauris ullamcorper.', cat: 'Салати', image: '1.jpg'},
    ])    

  return (
    <div>
      <ProductCont.Provider value={{product}}>
        {children}
      </ProductCont.Provider>
    </div>
  )
}

export default ProductContext
