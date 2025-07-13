export default function SafeIframe({ src, title }) {
    return (
        <div className="aspect-w-16 aspect-h-9 w-full my-4">
            <iframe
                src={src}
                allow="fullscreen"
                title={title}
                className="w-full h-full"
            />
        </div>
    );
}
