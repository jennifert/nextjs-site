import Link from 'next/link'
import Nav from '../components/nav'
import Footer from '../components/footer'

export default function Layout({ children, home }) {
    return (
        <>
            <span className="sr-only"><a href="#main-content">Skip to main content</a></span>
            <header className="pl-4 pr-4">
                <Nav />
            </header>
            <main className="p-4">{children}</main>
            <Footer className="p-4" />
        </>
    )
}