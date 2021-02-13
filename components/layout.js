import Link from 'next/link'
import Meta from '../components/meta'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { SITE_TITLE } from '../lib/constants'

import React, { useEffect } from 'react';
import Prism from "prismjs";
import "prismjs/components/prism-java"; //https://prismjs.com/#supported-languages
import "prismjs/components/prism-jsx.min";
import "prismjs/plugins/unescaped-markup/prism-unescaped-markup.min.js"; //TODO: look into seeing of this can be removed.
export default function Layout({ children, home }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    return (
    <>
        <Meta />
        <div className="min-h-screen">
            <span className="sr-only sm:not-sr-only"><a href="#main-content">Skip to main content</a></span>
            <header className="p-4 shadow rounded bg-white">
                <span className="text-black leading-normal site-title">{SITE_TITLE}</span>
                <Nav />
            </header>
            <main className="p-4">{children}</main>
            <Footer className="p-4" />
        </div>
    </>
    )
}