import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <About />
        <section id="skills"   style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>Skills — coming soon</section>
        <section id="projects" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>Projects — coming soon</section>
        <Experience />
        <Contact />
      </main>
    </>
  )
}

export default App
