import React, { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import PMain from "./pages/PMain"
import Header from "./components/_Header/Header"
import Footer from "./components/_Footer/Footer"

const App:FC = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<PMain/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default App