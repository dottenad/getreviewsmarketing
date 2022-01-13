import React from 'react'
import App from 'next/app'
import SiteLayout from '../components/SiteLayout'
import SupportLayout from '../components/SupportLayout'
import '../styles/globals.css'

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    if (router.pathname.startsWith('/support')) {
      return (
        <SupportLayout>
          <Component {...pageProps} />
        </SupportLayout>
      )
    }

    return (
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    )
  }
}

export default MyApp
