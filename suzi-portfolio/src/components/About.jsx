import './About.css'
import { ABOUT_ME, ABOUT_ME_2 } from '../constants'
import { splitIntoParagraphs, renderWithHighlights } from '../utils'

const paragraphs1 = splitIntoParagraphs(ABOUT_ME)
const paragraphs2 = splitIntoParagraphs(ABOUT_ME_2)

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
            {paragraphs1.map((p, i) => (
              <p key={i} className="about-para">{renderWithHighlights(p)}</p>
            ))}
          </div>

        </div>
      </div>

      <div className="content-container">
        <div className="about-inner second-section">
          <div className="about-left">
            <p className="eyebrow">&nbsp;</p>
            <h2 className="title">
              Why Me?
            </h2>
          </div>

          <div className="about-right">
            {paragraphs2.map((p, i) => (
              <p key={i} className="about-para">{renderWithHighlights(p)}</p>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
