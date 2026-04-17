export default function SafeIframe({ src, title }) {
    return (
        <div className="safe-iframe">
            <iframe
                src={src}
                title={title}
                allowFullScreen
                loading="lazy"
            />
        </div>
    );
}