import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@/i18n'
import Home from '@/views/Home'
import { getLenis } from '@/lib/lenis'

export default function HomeIsland() {
  useEffect(() => {
    getLenis()
  }, [])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </HelmetProvider>
  )
}
