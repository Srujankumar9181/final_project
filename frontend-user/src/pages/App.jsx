import React from 'react'
import styles from "../Styles/PageStyles/App.module.css"
import Homepage from './Homepage'
import {Routes, Route} from "react-router"
import OrderPage from './OrderPage'






function App() {
  return (
    <div className={styles.main}>
   

      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/order' element={<OrderPage />}/>
      </Routes>
      
      
    </div>
  )
}

export default App
