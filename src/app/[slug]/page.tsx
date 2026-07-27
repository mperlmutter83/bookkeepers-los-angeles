import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, getPosts, toRenderPost, contentToHtml, type RenderPost } from "@/lib/api";
import { getPublishedPosts, getPostBySlug } from "@/lib/blog-data";

export const revalidate = 60;

const SITE_DOMAIN = "bookkeeperslosangeles.com";

async function resolvePost(slug: string): Promise<RenderPost | undefined> {
  const apiPost = await getPost(SITE_DOMAIN, slug);
  if (apiPost) return toRenderPost(apiPost);
  return getPostBySlug(slug);
}

export async function generateStaticParams() {
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle || `${post.title} | Bookkeeping Service Los Angeles`,
    description: post.seoDescription || post.metaDescription || post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pt-16 md:pt-20">
          <p className="text-xs text-accent font-semibold mb-3">
            <Link href="/blog" className="hover:underline">Blog</Link>
            {" "}/ {post.category}
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-sm text-gray-500 mb-10">{post.date}</p>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 pb-16">
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: contentToHtml(post.content) }}
          />
          <div className="bg-navy text-white rounded-xl p-8 mt-12 text-center">
            <h2 className="font-heading text-2xl font-bold mb-3 text-white">
              Need Help With Your Bookkeeping?
            </h2>
            <p className="text-white/80 mb-6">
              Book a free consultation with Bookkeeping Service Los Angeles and get your finances
              on track.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-navy font-semibold px-8 py-3 rounded-full hover:bg-accent hover:text-white transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
