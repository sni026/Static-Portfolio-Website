import './About.css'
import { ABOUT_ME } from '../constants'
import { splitIntoParagraphs } from '../utils'

const paragraphs = splitIntoParagraphs(ABOUT_ME)

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="content-container">
        <div className="about-inner">

          <div className="about-left">
            <p className="eyebrow">— About Me</p>
            <h2 className="title">
              Why Dev?
            </h2>
          </div>

          <div className="about-right">
            {paragraphs.map((p, i) => (
              <p key={i} className="about-para">{p}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
