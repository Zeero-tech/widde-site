import { useRef, useCallback } from 'react'

interface LetterButtonProps {
  href: string
  children: string
  className?: string
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void
}

export default function LetterButton({ href, children, className = '', onClick }: LetterButtonProps) {
  const letters = children.split('')
  const letterRefs = useRef<HTMLSpanElement[]>([])
  const isExternal = href.startsWith('http://') || href.startsWith('https://')

  const animate = useCallback((direction: 'in' | 'out') => {
    letterRefs.current.forEach((span, i) => {
      if (!span) return
      span.style.transition = `transform 0.4s cubic-bezier(0.76,0,0.24,1) ${i * 30}ms`
      span.style.transform = direction === 'out' ? 'translateY(-50%)' : 'translateY(0%)'
    })
  }, [])

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => animate('out')}
      onMouseLeave={() => animate('in')}
      className={`inline-flex items-center no-underline ${className}`}
      {...(isExternal ? { target: '_self', rel: 'external' } : {})}
    >
      {letters.map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', height: '1.2em', verticalAlign: 'middle' }}>
          <span
            ref={(el) => { if (el) letterRefs.current[i] = el }}
            style={{ display: 'flex', flexDirection: 'column', height: '200%' }}
          >
            <span style={{ height: '50%', display: 'flex', alignItems: 'center' }}>{char === ' ' ? '\u00A0' : char}</span>
            <span style={{ height: '50%', display: 'flex', alignItems: 'center' }} aria-hidden="true">{char === ' ' ? '\u00A0' : char}</span>
          </span>
        </span>
      ))}
    </a>
  )
}
