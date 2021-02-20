import React from 'react'
import { Router } from "@reach/router"
import Home from '../pages/home'
import About from '../pages/about'
import Contact from '../pages/contact'

export default function AppRouter() {
    return (
        <Router>
            <Home path="/" />
            <About path='/about' />
            <Contact path = '/contact'/>
                
       </Router>
    )
}
