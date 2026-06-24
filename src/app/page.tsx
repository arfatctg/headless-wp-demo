import Link from "next/link";
import { fetchGraphQL } from "@/lib/wordpress";
import { GET_SERVICES, GET_POSTS } from "@/lib/queries";
import { ServicePage, Post } from "@/lib/types";

export default async function Home() {
    const [servicesData, postsData] = await Promise.all([
        fetchGraphQL(GET_SERVICES),
        fetchGraphQL(GET_POSTS),
    ]);

    const services: ServicePage[] = servicesData.pages.nodes.filter(
        (page: ServicePage) => page.serviceDetails?.tagline,
    );
    const posts: Post[] = postsData.posts.nodes.slice(0, 3);

    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-24 px-8 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Modern WordPress Sites <br />
                    <span className="text-blue-400">
                        Built for Speed & Scale
                    </span>
                </h1>
                <p className="text-slate-300 text-xl max-w-2xl mx-auto mb-8">
                    We build headless WordPress sites and migrate AI-builder
                    sites into proper, scalable setups. Serving clients across
                    the UK and Europe.
                </p>
                <Link
                    href="/contact"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                    Get a Free Quote
                </Link>
            </section>

            {/* Services */}
            <section className="py-20 px-8 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    What We Do
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.slug}
                            className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-4">
                                {service.serviceDetails.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">
                                {service.title}
                            </h3>
                            <p className="text-slate-600 mb-4">
                                {service.serviceDetails.tagline}
                            </p>
                            <p className="text-blue-600 font-semibold">
                                From {service.serviceDetails.priceFrom}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Latest Posts */}
            <section className="bg-slate-50 py-20 px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Latest Articles
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link
                                key={post.id}
                                href={`/blog/${post.slug}`}
                                className="bg-white rounded-xl p-6 hover:shadow-lg transition block"
                            >
                                <p className="text-sm text-slate-400 mb-2">
                                    {new Date(post.date).toLocaleDateString(
                                        "en-GB",
                                        {
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        },
                                    )}
                                </p>
                                <h3 className="text-lg font-bold mb-2">
                                    {post.title}
                                </h3>
                                <div
                                    className="text-slate-600 text-sm line-clamp-3"
                                    dangerouslySetInnerHTML={{
                                        __html: post.excerpt,
                                    }}
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            href="/blog"
                            className="text-blue-600 font-semibold hover:underline"
                        >
                            View all articles →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
