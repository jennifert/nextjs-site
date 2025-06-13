
import Link from 'next/link';
import meta from '../public/meta.json';

export default function LatestPosts() {
  const posts = meta
    .filter(post => post.route.startsWith('/blog') && !post.route.includes('template'))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  return (
    <section id="latest-blogs" aria-labelledby="blogs-heading">
      <h2 id="blogs-heading">Latest Blog Posts</h2>
      <div className="flex flex-wrap">
        {posts.map(post => (
          <div key={post.route} className="xl:w-1/3 md:w-1/2 mb-4 px-4">
            <div className="border border-gray-300 p-6 rounded-lg">
              <h2 className="text-lg font-medium title-font mb-2">
                <Link
                  href={post.route}
                  className="underline hover:underline focus:ring-2 focus:ring-white"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="leading-relaxed text-base">{post.description}</p>
              <div className="text-center mt-2 leading-none flex justify-between w-full">
                <span className="mr-3 inline-flex items-center leading-none text-sm py-1">
                  <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</time>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
