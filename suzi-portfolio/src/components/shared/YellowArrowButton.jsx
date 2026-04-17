import './YellowArrowButton.css'

export default function YellowArrowButton({ href, onClick, children }) {
  return (
    <a href={href} className="yellow-arrow-btn" onClick={onClick}>
      {children}
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="yellow-arrow-btn-icon"
      >
        <path
          d="M2 12L12 2M12 2H4M12 2V10"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  )
}
