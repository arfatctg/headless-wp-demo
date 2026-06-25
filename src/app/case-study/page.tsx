import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Case Study — Lovable to Headless WordPress Migration | Sohel Rana",
    description:
        "How we rebuilt an AI-generated site into a headless WordPress + Next.js setup, achieving a 100 Lighthouse performance score.",
};

const beforeMetrics = [
    { label: "Performance", value: "54", color: "text-red-500" },
    { label: "SEO", value: "61", color: "text-red-500" },
    { label: "Best Practices", value: "67", color: "text-orange-500" },
    { label: "Load Time", value: "4.2s", color: "text-red-500" },
];

const afterMetrics = [
    { label: "Performance", value: "100", color: "text-green-500" },
    { label: "SEO", value: "100", color: "text-green-500" },
    { label: "Best Practices", value: "96", color: "text-green-500" },
    { label: "Load Time", value: "0.8s", color: "text-green-500" },
];

const problems = [
    {
        icon: "🐌",
        title: "Slow load times",
        description:
            "AI builder output had no performance optimisation — images uncompressed, no caching, no CDN.",
    },
    {
        icon: "🔍",
        title: "Poor SEO control",
        description:
            "No control over meta tags, Open Graph, or structured data. Google couldn't index it properly.",
    },
    {
        icon: "🔒",
        title: "Vendor lock-in",
        description:
            "Content was trapped inside the AI builder. No CMS, no content team access, no way to migrate.",
    },
    {
        icon: "📵",
        title: "Not scalable",
        description:
            "Adding a blog, new pages, or custom content types required a developer and a rebuild every time.",
    },
];

const solutions = [
    {
        icon: "⚡",
        title: "Headless WordPress backend",
        description:
            "WordPress as a pure CMS — content team can edit freely without touching the frontend.",
    },
    {
        icon: "🚀",
        title: "Next.js frontend on Vercel",
        description:
            "Static generation + edge CDN = sub-second load times and 100 Lighthouse performance score.",
    },
    {
        icon: "🎯",
        title: "Full SEO control",
        description:
            "Per-page metadata, Open Graph tags, structured data, and a sitemap — all generated automatically.",
    },
    {
        icon: "🔧",
        title: "ACF custom content types",
        description:
            "Services, team members, testimonials — all manageable from WordPress without a developer.",
    },
];

export default function CaseStudyPage() {
    return (
        <main>
            {/* Hero */}
            <section className="bg-slate-900 text-white py-20 px-8 text-center">
                <span className="inline-block bg-blue-500/20 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full mb-6">
                    Case Study
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto">
                    From Lovable AI Builder to{" "}
                    <span className="text-blue-400">
                        Headless WordPress + Next.js
                    </span>
                </h1>
                <p className="text-slate-300 text-xl max-w-2xl mx-auto">
                    How a consulting business went from a 54 Lighthouse score
                    and vendor lock-in to a 100-score headless site with full
                    content control.
                </p>
            </section>

            {/* Metrics comparison */}
            <section className="py-20 px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Before vs After
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Before */}
                    <div className="border border-red-100 rounded-2xl p-8 bg-red-50">
                        <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center gap-2">
                            <span>❌</span> Before — Lovable AI Builder
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {beforeMetrics.map((m) => (
                                <div
                                    key={m.label}
                                    className="bg-white rounded-xl p-4 text-center shadow-sm"
                                >
                                    <p
                                        className={`text-3xl font-bold ${m.color}`}
                                    >
                                        {m.value}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* After */}
                    <div className="border border-green-100 rounded-2xl p-8 bg-green-50">
                        <h3 className="text-xl font-bold mb-6 text-green-700 flex items-center gap-2">
                            <span>✅</span> After — Headless WordPress + Next.js
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {afterMetrics.map((m) => (
                                <div
                                    key={m.label}
                                    className="bg-white rounded-xl p-4 text-center shadow-sm"
                                >
                                    <p
                                        className={`text-3xl font-bold ${m.color}`}
                                    >
                                        {m.value}
                                    </p>
                                    <p className="text-sm text-slate-500 mt-1">
                                        {m.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Screenshots */}
            <section className="bg-slate-50 py-20 px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Side by Side
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <p className="text-sm font-semibold text-red-500 mb-3 uppercase tracking-wide">
                                Before — AI Builder
                            </p>
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                                <Image
                                    src="/before_screenshot.webp"
                                    alt="Before — Lovable AI builder site"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-green-500 mb-3 uppercase tracking-wide">
                                After — Headless WordPress
                            </p>
                            <div className="rounded-xl overflow-hidden border border-slate-200 shadow-md">
                                <Image
                                    src="/after_screenshot.png"
                                    alt="After — Headless WordPress + Next.js"
                                    width={600}
                                    height={400}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems */}
            <section className="py-20 px-8 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">
                    The Problems
                </h2>
                <p className="text-slate-500 text-center mb-12">
                    Why the AI builder site wasn't working
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    {problems.map((p) => (
                        <div
                            key={p.title}
                            className="flex gap-4 p-6 border border-slate-200 rounded-xl"
                        >
                            <span className="text-3xl">{p.icon}</span>
                            <div>
                                <h3 className="font-bold mb-1">{p.title}</h3>
                                <p className="text-slate-600 text-sm">
                                    {p.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Solutions */}
            <section className="bg-slate-900 text-white py-20 px-8">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">
                        The Solution
                    </h2>
                    <p className="text-slate-400 text-center mb-12">
                        What we built instead
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {solutions.map((s) => (
                            <div
                                key={s.title}
                                className="flex gap-4 p-6 bg-slate-800 rounded-xl"
                            >
                                <span className="text-3xl">{s.icon}</span>
                                <div>
                                    <h3 className="font-bold mb-1">
                                        {s.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        {s.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech stack */}
            <section className="py-20 px-8 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Tech Stack Used</h2>
                <p className="text-slate-500 mb-10">
                    Everything used to deliver this project
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        "WordPress (Headless)",
                        "WPGraphQL",
                        "Advanced Custom Fields",
                        "Next.js 16",
                        "Tailwind CSS",
                        "Vercel",
                        "TypeScript",
                    ].map((tech) => (
                        <span
                            key={tech}
                            className="bg-slate-100 text-slate-700 font-medium px-4 py-2 rounded-full text-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-600 text-white py-20 px-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Got a site built in Lovable or an AI builder?
                </h2>
                <p className="text-blue-100 text-xl mb-8 max-w-xl mx-auto">
                    I'll rebuild it into a fast, scalable headless WordPress
                    site — with full SEO control and a content team can actually
                    manage.
                </p>
                <Link
                    href="/contact"
                    className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition inline-block"
                >
                    Get a Free Quote
                </Link>
            </section>
        </main>
    );
}
