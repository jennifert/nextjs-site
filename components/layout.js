import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from './meta'

export default function Layout({ children, home }) {
  return (
    <>
      <Meta />
      <span className="sr-only"><a href="#main-content">Skip to main content</a></span>
      <header><Nav /></header>
      <main>{children}</main>
      <Footer />
    </>
  )
}