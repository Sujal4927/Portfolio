import Footer from './layout/Footer'
import Navbar from './layout/Navbar'
import About from './sections/About'
import Contact from './sections/Contact'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'


function App() {

  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Education />
          <Contact />
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default App

// 13:49