import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import '@/i18n'
import VideoCommerce from '@/views/VideoCommerce'
import { getLenis } from '@/lib/lenis'

export default function VideoCommerceIsland() {
  useEffect(() => {
    getLenis()
  }, [])

  return (
    <HelmetProvider>
      <BrowserRouter>
        <VideoCommerce />
      </BrowserRouter>
    </HelmetProvider>
  )
}
