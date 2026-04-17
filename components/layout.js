import { useEffect, useState } from 'react';
import Footer from '../components/footer'
import Header from './header'
import Meta from './meta'

export default function Layout({ children, home = false }) {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="not-mounted">
                <p>Loading site... Please ensure Javascript is enabled.</p>
            </div>
        );
    }

    return (
        <>
            <Meta />
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <Header />
            {children}
            <Footer home={home} />
        </>
    )
}