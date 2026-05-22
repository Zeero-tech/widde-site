import { useEffect } from 'react'
import { getLenis } from '@/lib/lenis'

export function useLenis() {
  useEffect(() => {
    // Ensure the singleton is initialized and running
    getLenis()
  }, [])
}
