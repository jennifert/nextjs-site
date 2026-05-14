import { useEffect, useState } from 'react';
import Footer from '../components/footer'
import Header from './header'
import Meta from './meta'

export default function Layout({ children, home = false }) {
    return (
        <>
            <Meta />
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>
            <Header />
            {children}
            <Footer home={home} />
        </>
    );
}