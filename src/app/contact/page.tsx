"use client";
import { useState } from "react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        budget: "",
        message: "",
    });
    const [status, setStatus] = useState<
        "idle" | "loading" | "success" | "error"
    >("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || "Something went wrong.");
                setStatus("error");
                return;
            }

            setStatus("success");
            setFormData({ name: "", email: "", budget: "", message: "" });
        } catch {
            setErrorMessage("Network error. Please try again.");
            setStatus("error");
        }
    };

    return (
        <main className="max-w-2xl mx-auto px-8 py-20">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-slate-500 mb-10">
                Tell me about your project and I'll get back to you within 24
                hours.
            </p>

            {status === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <div className="text-4xl mb-4">✅</div>
                    <h2 className="text-xl font-bold text-green-800 mb-2">
                        Message sent!
                    </h2>
                    <p className="text-green-700">
                        Thanks for reaching out. I'll reply within 24 hours.
                    </p>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jane Smith"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jane@company.com"
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Budget */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Budget Range
                        </label>
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        >
                            <option value="">Select a range</option>
                            <option value="Under £500">Under £500</option>
                            <option value="£500 – £1,000">£500 – £1,000</option>
                            <option value="£1,000 – £2,500">
                                £1,000 – £2,500
                            </option>
                            <option value="£2,500 – £5,000">
                                £2,500 – £5,000
                            </option>
                            <option value="£5,000+">£5,000+</option>
                            <option value="Not sure yet">Not sure yet</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                            Tell me about your project{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            placeholder="I have a site built in Lovable and need it rebuilt properly..."
                            className="w-full border border-slate-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-4 py-3 text-sm">
                            {errorMessage}
                        </div>
                    )}

                    {/* Submit */}
                    <button
                        onClick={handleSubmit}
                        disabled={status === "loading"}
                        className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 text-white font-semibold py-3 px-8 rounded-lg transition"
                    >
                        {status === "loading" ? "Sending..." : "Send Message"}
                    </button>

                    <p className="text-slate-400 text-xs text-center">
                        I typically reply within 24 hours. No spam, ever.
                    </p>
                </div>
            )}
        </main>
    );
}
