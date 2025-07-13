// import Link from 'next/link'
import { useEffect, useState } from 'react';
import Nav from '../components/nav'
import Footer from '../components/footer'
import Meta from './meta'

export default function Layout({ children }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-white text-center p-8">
                <p className="text-gray-500">Loading site...</p>
            </div>
        );
    }

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