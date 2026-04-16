import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Placeholder sections — to be built next */}
        <section id="about"    style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>About — coming soon</section>
        <section id="skills"   style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>Skills — coming soon</section>
        <Experience />
        <section id="projects" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>Projects — coming soon</section>
        <section id="contact"  style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', color: 'var(--clr-muted)' }}>Contact — coming soon</section>
      </main>
    </>
  )
}

export default App
