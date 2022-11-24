import React from "react"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Header from "./components/header/header"
import Home from "./pages/home/home"
import Details from "./pages/details/details"
import Errors from "./pages/errors/errors"
import About from "./pages/about/about"
import Footer from "./components/footer/footer"

const App = () => {
  return (
    <Router>
        <Header />
        <main className="container content main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail/:id" element={<Details />} />
                <Route path="*" element={<Errors />} />
            </Routes>
        </main>
        <Footer />
    </Router>
    )
}

export default App