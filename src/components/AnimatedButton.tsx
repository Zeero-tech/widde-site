import React from 'react'

interface AnimatedButtonProps {
  href: string
  children: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

function splitToSpans(text: string) {
  return Array.from(text).map((char, i) => (
    <span
      key={i}
      style={{
        transitionDelay: `${(i * 0.01).toFixed(2)}s`,
        whiteSpace: char === ' ' ? 'pre' : undefined,
      }}
    >
      {char}
    </span>
  ))
}

export default function AnimatedButton({ href, children, className = '', onClick }: AnimatedButtonProps) {
  return (
    <a href={href} className={`btn-animate-chars ${className}`} onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
      <span data-button-animate-chars="" className="btn-animate-chars__text">
        {splitToSpans(children)}
      </span>
    </a>
  )
}
