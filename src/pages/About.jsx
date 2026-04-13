import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import OrangeTicker from "../components/OrangeTicker";
import PullQuote from "../components/PullQuote";
import aboutimage from '../assets/aboutpage.jpeg';
import aboutimg2 from '../assets/dfpheroimage.png';

const intentions = [
    {
        num: "01",
        title: "CONNECT RESEARCH TO REAL-WORLD STRUGGLES.",

    },
    {
        num: "02",
        title: "CENTER ADVOCATES AS CO-PRODUCERS OF KNOWLEDGE.",

    },
    {
        num: "03",
        title: "Highlight students as emerging democratic actors",

    },
    {
        num: "04",
        title: "Communicate seriousness without institutional coldness.",

    },
];

const values = [
    {
        tag: "FOUNDATION",
        name: "RIGOROUS YET RADICAL",
        sub: "We are grounded in facts, data, and peer-reviewed research. However, we are unafraid to use that knowledge to challenge the status quo and demand structural change.",
    },
    {
        tag: "COMMITMENT",
        name: "The Many not the Few",
        sub: "We focus on those living pushed to the “edges” of democracy – displaced persons, refugees, and marginalized groups. We believe that true democratic health is measured by its ability to center the needs of the most vulnerable, not the most powerful.",
    },
    {
        tag: "PURPOSE",
        name: "RHETORIC AS ACTION",
        sub: "Words matter. We believe that the way we speak about rights shapes the reality of rights. We reclaim language to empower the voiceless.",
    },
];

// const timeline = [
//     { year: "2019", label: "Founded" },
//     { year: "2021", label: "STJ Partnership" },
//     { year: "2022", label: "Philippines" },
//     { year: "2023", label: "GENE / AI" },
//     { year: "2024", label: "Crypto WG" },
//     { year: "2025", label: "CAKN" },
// ];

export default function About() {
    return (
        <div>
            {/* Hero */}
            <section
                className="relative min-h-[60vh] flex items-center justify-center px-6 py-16 md:py-20 text-center overflow-hidden bg-(--navy)"
                data-ocid="about.section"
            >
                <img
                    src={aboutimage}
                    alt="Research and advocacy"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="noise-overlay absolute inset-0" />
                <div className="relative z-3 w-full flex flex-col items-center" style={{ maxWidth: 960 }}>
                    <div className="t-label mb-3 text-center">
                        ABOUT THE DEMOCRATIC FUTURES PROJECT
                    </div>
                    <OrangeTicker />
                    <h1
                        className="t-section text-white mb-6"
                        style={{ fontSize: "clamp(48px,7vw,110px)" }}
                    >
                        {[
                            "UNIVERSITIES",
                            "MUST PARTICIPATE",
                            "IN DEMOCRACY'S DEFENSE.",
                        ].map((word, i) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                                style={{ display: "block" }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="italic text-[20px]"
                        style={{
                            fontFamily: "Lora, serif",
                            color: "rgba(255,255,255,0.75)",
                        }}
                    >
                        Not just study it. Not just report on it. Defend it.
                    </motion.p>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-white py-16 md:py-24">
                <div
                    className="max-w-[1280px] mx-auto px-6 flex flex-col md:grid md:grid-cols-[35%_minmax(0,1fr)] gap-12 md:gap-[64px]"
                >
                    {/* Left sticky sidebar */}
                    <div className="md:sticky md:top-[100px] self-start">
                        <div className="relative">

                            <img src={aboutimg2} alt="aboutimg" className="w-full h-full" />
                        </div>
                    </div>

                    {/* Right: story */}
                    <AnimatedSection>
                        <p
                            className="leading-[1.9] mb-6 text-[var(--ink)] text-xl font-semibold"
                            style={{ fontFamily: "Lora, serif" }}
                        >
                            We believe that universities must go beyond studying democracy, they must participate in its defense.
                        </p>
                        <p
                            className="leading-[1.9] mb-6 text-[var(--ink)] text-base"
                            style={{ fontFamily: "Lora, serif" }}
                        >
                            The Democratic Futures Project unites academics, advocates, and policy makers in partnership with international democratic advocates to reinvigorate democracy within authoritarian nations. We believe that research should stand with those defending freedom.
                        </p>

                        <div>

                            <p className="leading-[1.9] mb-4 text-(--ink) text-base" style={{ fontFamily: "Lora, serif" }}>We are committed to:</p>

                            <div className="flex flex-col gap-4 mb-6">
                                {[
                                    "creating research collaborations which join the rigor of scholarship to the needs of those actively working to expand democratic and human rights.",
                                    "providing the leadership and nonviolent movement training to enable advocates and opposition leaders to build broad coalitions capable of withstanding the authoritarian impulses emerging across the world.",
                                    "ensuring that new technologies serve democracy over authoritarianism."
                                ].map((stmt, idx) => (
                                    <div key={idx} className="flex gap-4 items-start">
                                        <span
                                            className="text-(--orange) font-black leading-none pt-[2px] text-[20px]"
                                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                        >
                                            —
                                        </span>
                                        <p
                                            className="leading-[1.9] m-0 text-(--ink) text-base"
                                            style={{ fontFamily: "Lora, serif" }}
                                        >
                                            {stmt}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p
                            className="leading-[1.9] mb-6 text-[var(--ink)] text-base"
                            style={{ fontFamily: "Lora, serif" }}
                        >
                            Finally, we recognize our collective responsibility to the next generation of democratic advocates. To that end, we sponsor courses, internships, and publications that enable students from the outset of their education to help build a democratic future in their home communities and across the globe.
                        </p>

                    </AnimatedSection>
                </div>
            </section>

            {/* Unique Approach */}
            <section
                className="noise-overlay bg-[var(--navy)] pt-16 md:pt-24 pb-24 md:pb-32"
                style={{
                    clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 6vw), 0 100%)",
                }}
            >
                <div
                    className="max-w-[1280px] mx-auto px-6 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-[64px] items-start"
                >
                    <AnimatedSection>
                        <PullQuote style={{ color: "#fff" }}>
                            "Too often, research on authoritarianism remains confined to
                            academic journals, disconnected from those resisting repression.
                            DFP changes that model."
                        </PullQuote>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="flex flex-col gap-5">
                            {[
                                "Co-create research with democratic advocates.",
                                "Produce scholarship that responds directly to real-world repression.",
                                "Train students as democratic thinkers and practitioner.",
                                "Publish and platform voices from movements.",
                                "Build transnational networks of solidarity.",
                                "We believe universities go beyond studying democracy, they must participate in its defense."
                            ].map((stmt) => (
                                <div key={stmt} className="flex gap-4 items-start">
                                    <span
                                        className="text-[var(--orange)] font-black leading-none pt-[2px] text-[20px]"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                    >
                                        —
                                    </span>
                                    <p
                                        className="leading-[1.75] m-0 text-[16px]"
                                        style={{
                                            fontFamily: "Lora, serif",
                                            color: "rgba(255,255,255,0.85)",
                                        }}
                                    >
                                        {stmt}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>


            {/* Core Intentions */}
            <section className="p-0 ">

                {intentions.map((item, i) => (
                    <motion.div
                        key={item.num}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="px-6 py-12 md:py-16 border-b border-[rgba(35,45,75,0.08)] max-w-[1280px] mx-auto flex flex-col md:grid md:grid-cols-[120px_2px_1fr] gap-6 md:gap-10 items-start md:items-center"
                        style={{
                            background: i % 2 === 0 ? "var(--cream)" : "#fff",
                        }}
                    >
                        <span
                            className="font-black text-[var(--orange)] leading-[0.9]"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontSize: "clamp(64px, 8vw, 120px)",
                            }}
                        >
                            {item.num}
                        </span>
                        <div className="w-[60px] h-[3px] md:w-full md:h-[80px] bg-[var(--orange)]" />
                        <div>
                            <h3
                                className="font-black text-[var(--navy)] uppercase m-0"
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontSize: "clamp(24px, 3vw, 40px)",
                                }}
                            >
                                {item.title}
                            </h3>
                            {/* <p
                                className="leading-[1.75] max-w-[720px] m-0 text-[var(--ink)] text-[17px]"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                {item.desc}
                            </p> */}
                        </div>
                    </motion.div>
                ))}

            </section>

            {/* Values */}
            <section className="bg-[var(--cream)] px-6 py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto">
                    {/* <AnimatedSection style={{ textAlign: "center", marginBottom: 48 }}>
                        <div className="t-label mb-3">OUR VALUES</div>
                        <OrangeTicker />
                    </AnimatedSection> */}
                    <AnimatedSection>
                        <div
                            className="grid gap-6"
                            style={{
                                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                            }}
                        >
                            {values.map((v, i) => (
                                <motion.div
                                    key={v.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    whileHover={{
                                        y: -8,
                                        boxShadow: "0 20px 60px rgba(35,45,75,0.15)",
                                    }}
                                    className="bg-white border border-[rgba(35,45,75,0.08)] border-t-[8px] border-t-[var(--orange)] p-8"
                                    style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
                                >
                                    <div className="t-label  mb-3">{v.tag}</div>
                                    <h3
                                        className="font-black  text-[var(--navy)] uppercase mb-4 text-3xl"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                    >
                                        {v.name}
                                    </h3>
                                    <p
                                        className="leading-[1.75] m-0 text-[var(--ink)] text-[16px]"
                                        style={{ fontFamily: "Lora, serif" }}
                                    >
                                        {v.sub}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>

            {/* Funded By */}
            <section className="bg-[var(--cream)] px-6 py-12 md:py-16 text-center">
                <div className="max-w-[700px] mx-auto">
                    <div className="t-label mb-4">MADE POSSIBLE BY</div>
                    <div className="flex flex-wrap gap-8 justify-center">

                        <a
                            href="https://cgii.virginia.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold text-[var(--navy)] no-underline border-b-2 border-[var(--orange)] pb-1 text-[28px]"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                            Center for Global Inquiry and Innovation
                        </a>
                    </div>
                    <p
                        className="text-[var(--fog)] mt-4 text-[14px]"
                        style={{ fontFamily: "Lora, serif" }}
                    >
                        University of Virginia
                    </p>
                </div>
            </section>
        </div>
    );
}
