import './Skills.css'
import { SKILLS } from '../constants'

export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <div className="content-container">

        <div className="skills-header">
          <p className="eyebrow">— Skills</p>
          <h2 className="title">WHAT I WORK WITH</h2>
        </div>

        <div className="skills-grid">
          {SKILLS.map(({ category, items }) => (
            <div key={category} className="skills-row">
              <span className="skills-category">{category}</span>
              <div className="skills-tags">
                {items.map(skill => (
                  <span key={skill} className="skills-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
