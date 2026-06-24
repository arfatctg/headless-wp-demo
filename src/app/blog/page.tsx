import Link from "next/link";
import { fetchGraphQL } from "@/lib/wordpress";
import { GET_POSTS } from "@/lib/queries";
import { Post } from "@/lib/types";

export const metadata = {
    title: "Blog — Sohel Rana",
    description:
        "Articles on headless WordPress, modern web development, and site performance.",
};

export default async function BlogPage() {
    const data = await fetchGraphQL(GET_POSTS);
    const posts: Post[] = data.posts.nodes;

    return (
        <main className="max-w-4xl mx-auto px-8 py-20">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-slate-500 mb-12">
                Thoughts on headless WordPress, Next.js, and building fast
                websites.
            </p>

            <div className="divide-y divide-slate-200">
                {posts.map((post) => (
                    <article key={post.id} className="py-8">
                        <p className="text-sm text-slate-400 mb-2">
                            {new Date(post.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </p>
                        <h2 className="text-2xl font-bold mb-3">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="hover:text-blue-500 transition"
                            >
                                {post.title}
                            </Link>
                        </h2>
                        <div
                            className="text-slate-600 mb-4 line-clamp-2"
                            dangerouslySetInnerHTML={{ __html: post.excerpt }}
                        />
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-500 font-semibold hover:underline text-sm"
                        >
                            Read article →
                        </Link>
                    </article>
                ))}
            </div>
        </main>
    );
}
