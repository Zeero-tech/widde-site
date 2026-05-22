import { useCountUp } from '@/hooks/useCountUp'

interface Props {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export default function CountUp({ target, prefix = '', suffix = '', duration = 1200, className }: Props) {
  const { value, ref } = useCountUp(target, duration)

  return (
    <span ref={ref as React.RefObject<HTMLSpanElement>} className={className}>
      {prefix}{value}{suffix}
    </span>
  )
}
