import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Contacts, Projects } from '../../components'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
