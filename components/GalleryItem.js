import Image from 'next/image'

export default function GalleryItem({ title, desc, src, index }) {
    return (
        <div className="p-4">
            <div className="caption text-gray-800">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm text-gray-600">{desc}</p>
            </div>

            <div className="relative w-96 h-96 overflow-hidden rounded shadow-lg border border-gray-200">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority={index === 0}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </div>
        </div>
    )
}
