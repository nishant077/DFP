import { ExternalLink, Mail } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import PullQuote from "../components/PullQuote";
import OrangeTicker from "../components/OrangeTicker";
import contactimage from '../assets/Contact.png';

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return;
        setIsSubmitting(true);

        const { name, email, subject, message } = form;

        let subjectText = "Democratic Futures Project Contact";
        if (subject === "general") subjectText = "General Inquiry";
        if (subject === "research") subjectText = "Research Partnership";
        if (subject === "media") subjectText = "Media";
        if (subject === "fellowship") subjectText = "Fellowship";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "bdfb2445-4ccb-40e9-81a2-3f3019308f18",
                    name,
                    email,
                    subject: subjectText,
                    message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
            } else {
                console.error("Form submission failed:", result);
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred while sending your message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputClassName =
        "w-full bg-[var(--cream)] border-[1.5px] border-[var(--navy)] px-4 py-3 text-[var(--ink)] outline-none rounded-sm box-border text-[16px]";

    const inputStyle = {
        fontFamily: "Lora, serif",
        transition: "border-color 0.2s",
    };

    return (
        <div>
            {/* Hero */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center px-6 py-16 md:py-20 text-center overflow-hidden bg-(--navy)"
                data-ocid="contact.section"
            >
                <img
                    src={contactimage}
                    alt="Contact"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="noise-overlay absolute inset-0" />
                <div className="relative z-3 w-full flex flex-col items-center" style={{ maxWidth: 960 }}>
                    <div className="t-label mb-3 text-center">REACH OUT</div>
                    <OrangeTicker />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="t-section text-white mb-0"
                        style={{ fontSize: "clamp(48px,7vw,110px)" }}
                    >
                        LET'S BUILD
                        <br />
                        DEMOCRATIC FUTURES
                        <br />
                        TOGETHER.
                    </motion.h1>
                </div>
            </section>

            {/* Two-column layout */}
            <section className="bg-(--cream) py-16 md:py-24">
                <div
                    className="max-w-[1280px] mx-auto px-6 flex flex-col md:grid md:grid-cols-[40%_minmax(0,1fr)] gap-12 md:gap-[80px] items-start"
                >
                    {/* Left */}
                    <AnimatedSection>
                        <div className="t-label mb-3">GET IN TOUCH</div>
                        <OrangeTicker />
                        <PullQuote
                            style={{
                                color: "var(--navy)",
                                marginBottom: 32,
                                marginTop: 16,
                                lineHeight: 1.5,
                            }}
                        >
                            "To learn more about the Democratic Futures Project, research partnerships, or fellowship opportunities, reach out to us directly."
                        </PullQuote>

                        {/* Contact block */}
                        <div className="bg-white p-6 border-t-4 border-[var(--orange)] mb-8">
                            <div
                                className="font-bold text-[var(--navy)] uppercase mb-1 text-[20px]"
                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                            >
                                Stephen Parks
                            </div>
                            <div
                                className="italic text-[var(--fog)] mb-3 text-[14px]"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                Founder &amp; Director
                            </div>
                            <a
                                href="mailto:sjp3st@virginia.edu"
                                className="flex items-center gap-2 text-[var(--orange)] no-underline mb-2 text-[15px]"
                                style={{ fontFamily: "Lora, serif" }}
                                data-ocid="contact.link"
                            >
                                <Mail size={14} />
                                sjp3st@virginia.edu
                            </a>
                            <p
                                className="text-[var(--fog)] m-0 text-[14px]"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                University of Virginia
                                <br />
                                Department of English
                                <br />
                                Writing and Rhetoric Program
                            </p>
                        </div>

                        {/* Institutional links */}
                        <div className="flex flex-col gap-3">
                            <div className="t-label mb-1">AFFILIATED WITH</div>
                            {[
                                {
                                    label: "University of Virginia",
                                    url: "https://www.virginia.edu/",
                                },
                                {
                                    label: "Center for Global Inquiry and Innovation",
                                    url: "https://cgii.virginia.edu/",
                                },
                                {
                                    label: "Jefferson Trust",
                                    url: "https://jeffersontrust.org/",
                                },
                            ].map((link) => (
                                <a
                                    key={link.url}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-(--navy) hover:text-(--orange) font-bold uppercase no-underline tracking-[1px] text-[15px]"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                >
                                    <ExternalLink size={12} className="text-[var(--orange)]" />
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right: Form */}
                    <AnimatedSection delay={0.2} className="w-full">
                        <div
                            className="bg-(--cream) p-6 md:p-12 w-full box-border"
                            style={{ boxShadow: "0 8px 40px rgba(35,45,75,0.1)" }}
                        >
                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-center py-12"
                                    data-ocid="contact.success_state"
                                >
                                    <div
                                        className="font-black text-[var(--navy)] uppercase mb-4 text-[48px]"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                    >
                                        MESSAGE SENT
                                    </div>
                                    <p
                                        className="italic text-[var(--fog)] text-[18px]"
                                        style={{ fontFamily: "Lora, serif" }}
                                    >
                                        Thank you for reaching out. We will respond as soon as
                                        possible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-5">
                                        <div>
                                            <label
                                                htmlFor="contact-name"
                                                className="block font-bold uppercase text-[var(--navy)] mb-2 tracking-[2px] text-[12px]"
                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                            >
                                                Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                placeholder="Enter your name"
                                                type="text"
                                                required
                                                value={form.name}
                                                onChange={(e) =>
                                                    setForm({ ...form, name: e.target.value })
                                                }
                                                className={inputClassName}
                                                style={inputStyle}
                                                data-ocid="contact.input"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="contact-email"
                                                className="block font-bold uppercase text-[var(--navy)] mb-2 tracking-[2px] text-[12px]"
                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                            >
                                                Email
                                            </label>
                                            <input
                                                id="contact-email"
                                                placeholder="example@gmail.com"
                                                type="email"
                                                required
                                                value={form.email}
                                                onChange={(e) =>
                                                    setForm({ ...form, email: e.target.value })
                                                }
                                                className={inputClassName}
                                                style={inputStyle}
                                                data-ocid="contact.input"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="contact-subject"
                                                className="block font-bold uppercase text-[var(--navy)] mb-2 tracking-[2px] text-[12px]"
                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                            >
                                                Subject
                                            </label>
                                            <select
                                                id="contact-subject"
                                                placeholder="Select an inquiry type..."
                                                required
                                                value={form.subject}
                                                onChange={(e) =>
                                                    setForm({ ...form, subject: e.target.value })
                                                }
                                                className={`${inputClassName} cursor-pointer`}
                                                style={inputStyle}
                                                data-ocid="contact.select"
                                            >
                                                <option value="">Select a subject...</option>
                                                <option value="general">General Inquiry</option>
                                                <option value="research">Research Partnership</option>
                                                <option value="media">Media</option>
                                                <option value="fellowship">Fellowship</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="contact-message"
                                                className="block font-bold uppercase text-[var(--navy)] mb-2 tracking-[2px] text-[12px]"
                                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                            >
                                                Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                placeholder="How can we collaborate ?"
                                                required
                                                rows={5}
                                                value={form.message}
                                                onChange={(e) =>
                                                    setForm({ ...form, message: e.target.value })
                                                }
                                                className={`${inputClassName} resize-y`}
                                                style={inputStyle}
                                                data-ocid="contact.textarea"
                                            />
                                        </div>
                                        <motion.button
                                            type="submit"
                                            whileHover={{ filter: "brightness(0.9)" }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full bg-[var(--orange)] text-white border-none py-4 font-bold uppercase cursor-pointer rounded-sm tracking-[3px] text-[16px]"
                                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                            data-ocid="contact.submit_button"
                                        >
                                            SEND MESSAGE →
                                        </motion.button>
                                        <p
                                            className="italic text-[var(--fog)] text-center m-0 text-[13px]"
                                            style={{ fontFamily: "Lora, serif" }}
                                        >
                                            This form is for general inquiries. For urgent advocacy
                                            matters, please email directly.
                                        </p>
                                    </div>
                                </form>
                            )}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
}
