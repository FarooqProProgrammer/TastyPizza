import React from 'react'
import ScrollTop from '../components/ScrollTop'
import Header from '../components/Header'
import HomeContent from '../components/Home_component'
import About from '../components/About'
import Services from '../components/Services'
import Menu from '../components/Menu'
import App from '../components/App'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div>
            <ScrollTop />
            <Header />
            <main class="l-main">
                <HomeContent />
                <About />
                <Services />
                <Menu />
                <App />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}
