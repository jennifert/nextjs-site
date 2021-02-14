import Link from 'next/link'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'

// import React, { useEffect } from 'react';
// import Prism from "prismjs";
export default function Layout({ children, home }) {
    // useEffect(() => {
    //     Prism.highlightAll();
    // }, []);
    return (
    <>
        <Meta />
            <span className="sr-only"><a href="#main-content">Skip to main content</a></span>
                <header className="pl-4 pr-4">
                <Nav />
            </header>
            <main className="p-4">{children}</main>
            <Footer className="p-4" />
    </>
    )
}