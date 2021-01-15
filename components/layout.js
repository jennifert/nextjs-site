import Link from 'next/link'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { SITE_TITLE } from '../lib/constants'

export default function Layout({ children, home }) {
    return (
    <>
        <Meta />
        <div className="min-h-screen">
            <a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>
            <header className="p-4 shadow rounded bg-white">
                <h2 className="text-black leading-normal">{SITE_TITLE}</h2>
                <Nav />
            </header>
            <main>{children}</main>
            <Footer />
        </div>
    </>
    )
}