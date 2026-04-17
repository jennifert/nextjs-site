import Image from 'next/image'

export default function PhotographyItem({ title, desc, src, href, index }) {
    return (
        <article className="photo-card">
            <div className="photo-image">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    priority={index === 0}
                />
            </div>

            <div className="photo-caption">
                <h2>{title}</h2>
                <p>{desc}</p>
            </div>
            {href && (
                <p className="link-row">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                        View on Flickr<span className="visually-hidden">: {title}</span>
                    </a>
                </p>
            )}
        </article>
    )
}