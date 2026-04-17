import './Experience.css'
import { EXPERIENCE, EXPERIENCE_SUBTITLE } from '../constants'

export default function Experience() {
  return (
    <section id="experience" className="section-container">
      <div className="content-container">

        {/* Section header */}
        <div className="experience-header">
          <div className="experience-header-left">
            <p className="eyebrow">— Experience</p>
            <h2 className="title">
              WHERE I'VE WORKED
            </h2>
          </div>
          <p className="experience-subtitle">
            {EXPERIENCE_SUBTITLE}
          </p>
        </div>

        {/* Cards */}
        <div className="experience-list">
          {EXPERIENCE.map((item, i) => (
            <div key={i} className="experience-card">
              <div className="experience-card-meta">
                <span className="experience-card-period">{item.period}</span>
                <span className="experience-card-role">{item.company}</span>
              </div>
              <h3 className="experience-card-company">{item.role}</h3>
              <p className="experience-card-desc">{item.description}</p>
              <div className="experience-card-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="experience-tag">{tag}</span>
                ))}
              </div>
              <div className="experience-card-arrow" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
