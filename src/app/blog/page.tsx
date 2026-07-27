import type { Metadata } from "next";
import Link from "next/link";
import { getPosts, toRenderPost, type RenderPost } from "@/lib/api";
import { getPublishedPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | Bookkeeping Service Los Angeles",
  description:
    "Latest insights in bookkeeping for Los Angeles small businesses: taxes, real estate, e-commerce, startups, and more.",
};

export const revalidate = 60;

const SITE_DOMAIN = "bookkeeperslosangeles.com";

export default async function BlogPage() {
  const apiPosts = await getPosts(SITE_DOMAIN);
  const posts: RenderPost[] =
    apiPosts.length > 0 ? apiPosts.map(toRenderPost) : getPublishedPosts();

  return (
    <>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 text-center">
          <p className="text-accent font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
            Expert Bookkeeping Solutions for Small Businesses
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Latest Insights in Bookkeeping
          </h1>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Discover tailored financial management strategies designed to streamline your business
            operations and maximize savings.
          </p>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/${post.slug}`}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                <p className="text-xs text-accent font-semibold mb-2">
                  {post.date} | {post.category}
                </p>
                <h2 className="font-heading text-xl font-semibold mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <span className="text-accent font-semibold text-sm mt-4">read more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
