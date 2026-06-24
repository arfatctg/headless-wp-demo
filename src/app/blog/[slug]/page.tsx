import { fetchGraphQL } from "@/lib/wordpress";
import { GET_POST_BY_SLUG, GET_POSTS } from "@/lib/queries";
import { Post, SinglePost } from "@/lib/types";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetchGraphQL(GET_POSTS);
    return data.posts.nodes.map((post: Post) => ({ slug: post.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await fetchGraphQL(GET_POST_BY_SLUG, { id: slug });
    const post: SinglePost = data.post;

    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} — Sohel Rana`,
        description: post.excerpt.replace(/<[^>]*>/g, "").slice(0, 160),
    };
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const data = await fetchGraphQL(GET_POST_BY_SLUG, { id: slug });
    const post: SinglePost = data.post;

    if (!post) notFound();

    return (
        <main className="max-w-3xl mx-auto px-8 py-20">
            {/* Back link */}
            <Link
                href="/blog"
                className="text-sm text-slate-400 hover:text-blue-500 transition mb-8 inline-block"
            >
                ← Back to Blog
            </Link>

            {/* Date */}
            <p className="text-sm text-slate-400 mb-3">
                {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
            </p>

            {/* Title */}
            <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

            {/* Featured image */}
            {post.featuredImage && (
                <div className="relative w-full h-64 mb-10 rounded-xl overflow-hidden">
                    <Image
                        src={post.featuredImage.node.sourceUrl}
                        alt={post.featuredImage.node.altText || post.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            {/* Content */}
            <div
                className="prose prose-slate max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* CTA */}
            <div className="mt-16 border border-blue-100 bg-blue-50 rounded-xl p-8 text-center">
                <h2 className="text-2xl font-bold mb-3">
                    Need a faster WordPress site?
                </h2>
                <p className="text-slate-600 mb-6">
                    I help UK and European businesses rebuild slow or outdated
                    sites into fast, headless WordPress setups.
                </p>
                <Link
                    href="/contact"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                    Get a Free Quote
                </Link>
            </div>
        </main>
    );
}
