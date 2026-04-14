import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";

import OrangeTicker from "../components/OrangeTicker";
import PullQuote from "../components/PullQuote";
import StatCounter from "../components/StatCounter";
import { useRouter } from "../context/router";
import MarqueeTicker from "../components/MarqueeTicker";
import heroimage from '../assets/HeroImage.png';
import steve from '../assets/governanceImages/steveparks.png'
import Srdja from '../assets/governanceImages/Srdja.png'
import Felix from '../assets/governanceImages/Felix.png'

const heroWords = [
    "RESEARCH",
    "IN SERVICE OF",
    "DEMOCRATIC STRUGGLE.",
];

const beliefs = [
    "Democracy is built and defended by people, not institutions alone.",
    "Research must serve those resisting authoritarian power.",
    "Universities have a responsibility beyond neutrality.",
    "Students are not passive learners, they are democratic actors.",
    "Global solidarity strengthens local resistance.",
];

const valueProps = [
    {
        num: "01",
        label: "REFRAME",
        desc: "Position the university as an active democratic participant.",
    },
    {
        num: "02",
        label: "CONNECT",
        desc: "Link academic research with grassroots advocates across borders.",
    },
    {
        num: "03",
        label: "INSPIRE",
        desc: "Demonstrate that rigorous scholarship can strengthen democratic movements.",
    },
    {
        num: "04",
        label: "MOBILIZE",
        desc: "Encourage students, scholars, and partners to participate in democratic collaboration.",
    },
];

export default function Home() {
    const { navigate } = useRouter();

    return (
        <div>
            {/* 1A: Hero */}
            <section
                className="relative min-h-screen flex items-center justify-center px-6 py-16 md:py-20 text-center overflow-hidden bg-(--navy)"
                data-ocid="home.section"
            >
                <img
                    src={heroimage}
                    alt="Democratic activists gathering"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="noise-overlay absolute inset-0" />

                <div className="relative z-3 w-full flex flex-col items-center" style={{ maxWidth: 960 }}>
                    <div className="t-label flex flex-col items-center">
                        <div className="mb-3 text-white">EST. 2019 · UNIVERSITY OF VIRGINIA</div>
                        <OrangeTicker />
                    </div>
                    <h1 style={{ margin: 0, marginBottom: 24 }}>
                        {heroWords.map((word, i) => (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                                style={{
                                    display: "block",
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 900,
                                    fontSize: "clamp(48px,7vw,110px)",
                                    lineHeight: 0.92,
                                    textTransform: "uppercase",
                                    letterSpacing: "-1px",
                                    color: "#fff",
                                }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.6 }}
                        style={{
                            fontFamily: "Lora, serif",
                            fontSize: 18,
                            color: "rgba(255,255,255,0.85)",
                            lineHeight: 1.7,
                            marginBottom: 32,
                            maxWidth: 480,
                        }}
                    >
                        "An international alliance uniting academics, advocates, and policymakers to defend democracy where it is most threatened."
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                        style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}
                    >
                        <button
                            type="button"
                            onClick={() => navigate("/research/active-projects")}
                            data-ocid="home.primary_button"
                            className="hover:bg-(--navy)/20 hover:border hover:border-white bg-(--orange) "
                            style={{
                                color: "#fff",
                                padding: "14px 28px",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 15,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                borderRadius: 2,
                                transition: "filter 0.2s, transform 0.2s",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget).style.filter =
                                    "brightness(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget).style.filter =
                                    "brightness(1)";
                            }}
                        >
                            OUR WORK →
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate("/about")}
                            data-ocid="home.secondary_button"
                            className="hover:bg-(--orange) bg-transparent border border-white hover:border-0"
                            style={{
                                color: "#fff",
                                padding: "14px 28px",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 15,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                borderRadius: 2,
                            }}
                        >
                            WHO WE ARE
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* 1B: Marquee Ticker */}
            {/* <Marqu /> */}
            <MarqueeTicker />
            {/* 1C: What We Believe */}
            <section className="bg-(--cream) py-16 md:py-24">
                <div
                    className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-[2fr_3fr] gap-12 md:gap-20 items-start"
                >
                    {/* Left */}
                    <AnimatedSection style={{ position: "relative" }}>
                        <div style={{ position: "relative" }}>
                            {/* <span
                                className="ghost-text"
                                style={{
                                    fontSize: "clamp(120px, 18vw, 220px)",
                                    color: "var(--navy)",
                                    left: -40,
                                    top: -40,
                                    lineHeight: 1,
                                }}
                                aria-hidden="true"
                            >
                                01
                            </span> */}
                            <div style={{ position: "relative" }}>
                                <div className="t-label" style={{ marginBottom: 12 }}>
                                    OUR TRUTHS
                                </div>
                                <OrangeTicker />
                                <PullQuote
                                    style={{
                                        color: "var(--navy)",
                                        marginBottom: 32,
                                        marginTop: 16,
                                        fontSize: "24px",
                                        lineHeight: 1.5,
                                    }}
                                >
                                    "Authoritarian governments try to weaken democracy in many ways, but people continue to resist. We believe research should stand with those defending freedom. When scholars, students, and advocates work together, knowledge can help protect and strengthen democracy."
                                </PullQuote>
                                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/about")}
                                        data-ocid="home.secondary_button"
                                        className="bg-transparent border-2 border-(--navy) text-(--navy) hover:bg-(--orange) hover:text-white hover:border-0"
                                        style={{
                                            // background: "transparent",
                                            // border: "2px solid var(--navy)",
                                            // color: "var(--navy)",
                                            padding: "10px 20px",
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 13,
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            cursor: "pointer",
                                            borderRadius: 2,
                                        }}
                                    >
                                        ABOUT DFP →
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => navigate("/research/active-projects")}
                                        data-ocid="home.secondary_button"
                                        className="bg-transparent border-2 border-(--navy) text-(--navy) hover:bg-(--orange) hover:text-white hover:border-0"
                                        style={{
                                            // background: "transparent",
                                            // border: "2px solid var(--navy)",
                                            // color: "var(--navy)",
                                            padding: "10px 20px",
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 13,
                                            letterSpacing: "2px",
                                            textTransform: "uppercase",
                                            cursor: "pointer",
                                            borderRadius: 2,
                                        }}
                                    >
                                        OUR RESEARCH →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* Right: beliefs */}
                    <div>
                        {beliefs.map((belief, i) => (
                            <motion.div
                                key={belief}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                whileHover={{ backgroundColor: "var(--orange-glow)" }}
                                style={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    gap: 20,
                                    padding: "20px 0",
                                    borderBottom: "1px solid rgba(35,45,75,0.1)",
                                    cursor: "default",
                                    transition: "background 0.2s",
                                    borderRadius: 2,
                                    paddingLeft: 15,
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 900,
                                        fontSize: 20,
                                        color: "var(--orange)",
                                        lineHeight: 1,
                                        minWidth: 32,
                                        paddingTop: 3,
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <p
                                    style={{
                                        fontFamily: "Lora, serif",
                                        fontSize: 18,
                                        color: "var(--ink)",
                                        lineHeight: 1.6,
                                        margin: 0,
                                    }}
                                >
                                    {belief}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1D: What We Do */}
            <section
                className="noise-overlay bg-(--navy) py-16 md:py-24"
            >
                <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                    <AnimatedSection>
                        <div
                            className="t-label"
                            style={{ color: "#fff", marginBottom: 12 }}
                        >
                            OUR VALUE PROPOSITION
                        </div>
                        <OrangeTicker />
                        <h2
                            className="t-section"
                            style={{ color: "#fff", marginBottom: 56, maxWidth: 900 }}
                        >
                            WE REFRAME. WE CONNECT.<br /> WE INSPIRE. WE MOBILIZE.
                        </h2>
                    </AnimatedSection>

                    <div>
                        {valueProps.map((item, i) => (
                            <motion.div
                                key={item.num}
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                            >
                                <motion.div
                                    whileHover={{ backgroundColor: "var(--orange-glow)" }}
                                    style={{
                                        borderTop: "1px solid rgba(244,244,240,0.2)",
                                        padding: "32px 24px",
                                        borderRadius: "4px",
                                        transition: "background-color 0.2s ease"
                                    }}
                                    className="value-row  grid grid-cols-1 md:grid-cols-[100px_250px_1fr] gap-4 md:gap-8 items-center"
                                >
                                    <span
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 900,
                                            fontSize: "clamp(48px, 6vw, 80px)",
                                            color: "var(--orange)",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {item.num}.
                                    </span>

                                    <div
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 700,
                                            fontSize: "clamp(28px, 3vw, 40px)",
                                            color: "#fff",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                    <p
                                        style={{
                                            fontFamily: "Lora, serif",
                                            fontSize: 16,
                                            color: "rgba(244,244,240,0.8)",
                                            lineHeight: 1.75,
                                            margin: 0,
                                            maxWidth: 640,
                                        }}
                                    >
                                        {item.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1E: Global Impact Counters */}
            <section
                className="bg-(--navy-deep) py-16 md:py-24 relative overflow-hidden"
            >
                <div
                    className="ghost-text absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
                    style={{
                        fontSize: "clamp(100px, 25vw, 300px)",
                    }}
                    aria-hidden="true"
                >
                    DFP
                </div>
                <div
                    className="max-w-[1280px] mx-auto px-6 md:px-12 relative z-2"
                >
                    <div
                        className="flex flex-col md:grid md:grid-cols-3 gap-12 md:gap-0 mb-12"
                    >
                        {[
                            { target: 22, suffix: "", label: "NATIONS" },
                            { target: 6, suffix: "", label: "YEARS" },
                            { target: 6, suffix: "", label: "CONTINENTS" },
                        ].map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`text-center px-0 md:px-6 ${i < 2 ? "border-b pb-12 md:pb-0 md:border-b-0 md:border-r border-(--orange)" : ""}`}
                            >
                                <StatCounter
                                    target={stat.target}
                                    suffix={stat.suffix}
                                    label={stat.label}
                                />
                            </div>
                        ))}
                    </div>
                    <p
                        style={{
                            fontFamily: "Lora, serif",
                            fontStyle: "italic",
                            fontSize: 18,
                            color: "var(--fog)",
                            textAlign: "center",
                            margin: 0,
                        }}
                    >
                        An international alliance spanning 6 continents, defending
                        democratic rights at the frontlines.
                    </p>
                </div>
            </section>

            {/* 1F: Featured Research Bento */}
            <section className="bg-(--cream) py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                    <AnimatedSection style={{ marginBottom: 40 }}>
                        <div className="t-label" style={{ marginBottom: 12 }}>
                            FEATURED RESEARCH
                        </div>
                        <OrangeTicker />
                    </AnimatedSection>

                    <div
                        className="flex flex-col md:grid gap-4 min-h-125"
                        style={{
                            gridTemplateColumns: "1fr 400px",
                            gridTemplateRows: "1fr 1fr",
                        }}
                    >
                        {/* Large card */}
                        <motion.div
                            whileHover={{ filter: "brightness(1.1)" }}
                            transition={{ duration: 0.3 }}
                            className="relative overflow-hidden rounded-sm cursor-pointer md:row-span-2 min-h-100 md:min-h-0"
                            onClick={() => navigate("/research/active-projects")}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=800&q=80"
                                alt="Democratic protest"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "rgba(35,45,75,0.7)",
                                }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    left: 0,
                                    padding: "32px",
                                }}
                            >
                                <span
                                    style={{
                                        background: "var(--orange)",
                                        color: "#fff",
                                        padding: "2px 10px",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 13,
                                        borderRadius: 2,
                                        display: "inline-block",
                                        marginBottom: 12,
                                    }}
                                >
                                    2021
                                </span>
                                <h3
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 900,
                                        fontSize: 40,
                                        color: "#fff",
                                        textTransform: "uppercase",
                                        lineHeight: 1.1,
                                        marginBottom: 12,
                                    }}
                                >
                                    Syrians for Truth & Justice
                                </h3>
                                <p
                                    style={{
                                        fontFamily: "Lora, serif",
                                        fontStyle: "italic",
                                        fontSize: 15,
                                        color: "rgba(255,255,255,0.8)",
                                        lineHeight: 1.6,
                                        marginBottom: 16,
                                    }}
                                >
                                    Partnership with STJ to create a nationwide network of human
                                    rights reporters documenting abuses across Syria.
                                </p>
                                <span
                                    className="text-(--orange) hover:text-white"
                                    style={{
                                        // color: "var(--orange)",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 14,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    READ MORE →
                                </span>
                            </div>
                        </motion.div>

                        {/* Right cards */}
                        {[
                            {
                                title: "Burmese Democratic Futures Working Group",
                                year: "2021",
                                desc: "International platform to research, document, and resist the Myanmar military junta.",
                            },
                            {
                                title: "GENE: AI Training Tool",
                                year: "2023",
                                desc: "AI-based strategic reflection tool built on CANVAS methodology for democratic movements.",
                            },
                        ].map((card) => (
                            <motion.div
                                key={card.title}
                                whileHover={{ x: 4 }}
                                onClick={() => navigate("/research/active-projects")}
                                style={{
                                    background: "var(--navy-deep)",
                                    borderLeft: "4px solid var(--orange)",
                                    padding: "24px",
                                    cursor: "pointer",
                                    borderRadius: 2,
                                    overflow: "hidden",
                                }}
                            >
                                <span
                                    style={{
                                        background: "var(--orange)",
                                        color: "#fff",
                                        padding: "2px 8px",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 11,
                                        borderRadius: 2,
                                        display: "inline-block",
                                        marginBottom: 8,
                                    }}
                                >
                                    {card.year}
                                </span>
                                <h4
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 22,
                                        color: "#fff",
                                        textTransform: "uppercase",
                                        lineHeight: 1.2,
                                        marginBottom: 8,
                                    }}
                                >
                                    {card.title}
                                </h4>
                                <p
                                    style={{
                                        fontFamily: "Lora, serif",
                                        fontSize: 14,
                                        color: "rgba(255,255,255,0.7)",
                                        lineHeight: 1.6,
                                        marginBottom: 12,
                                    }}
                                >
                                    {card.desc}
                                </p>
                                <span
                                    style={{
                                        color: "var(--orange)",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 16,
                                    }}
                                >
                                    →
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <AnimatedSection style={{ textAlign: "center", marginTop: 40 }}>
                        <button
                            type="button"
                            onClick={() => navigate("/research/active-projects")}
                            data-ocid="home.primary_button"
                            className="hover:bg-transparent hover:border-2 hover:border-(--navy) hover:text-(--navy) bg-(--orange) text-white border-0 px-5 py-4"
                            style={{
                                // background: "var(--orange)",
                                // color: "#fff",
                                // border: "none",
                                // padding: "14px 32px",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 15,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                borderRadius: 2,
                            }}
                        >
                            SEE ALL PROJECTS →
                        </button>
                    </AnimatedSection>
                </div>
            </section>

            {/* 1G: People Preview */}
            <section className="bg-white py-16 md:py-24">
                <div
                    className="max-w-[1280px] mx-auto px-6 md:px-12 flex flex-col md:grid md:grid-cols-2 gap-12 md:gap-20 items-center"
                >
                    <AnimatedSection>
                        <h2
                            className="t-section"
                            style={{ color: "var(--navy)", marginBottom: 24 }}
                        >
                            THE PEOPLE BEHIND THE PROJECT
                        </h2>
                        <button
                            type="button"
                            onClick={() => navigate("/people/governance")}
                            data-ocid="home.primary_button"
                            className="text-(--orange) border-2 border-(--orange) hover:border-(--navy) hover:text-(--navy)"
                            style={{
                                marginTop: 16,
                                background: "transparent",
                                // border: "2px solid var(--orange)",
                                padding: "12px 24px",
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 13,
                                letterSpacing: "2px",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                borderRadius: 2,
                            }}
                        >
                            MEET THE TEAM →
                        </button>
                    </AnimatedSection>

                    <div>
                        {[
                            {
                                name: "Stephen Parks",
                                role: "Founder & Director",
                                initials: "SP",
                                image: steve,
                            },
                            { name: "Srdja Popovic", role: "Co-Founder", initials: "SR", image: Srdja },
                            {
                                name: "Felix Maradiaga",
                                role: "Advocate & Faculty",
                                initials: "FM",
                                image: Felix,
                            },
                        ].map((person, i) => (
                            <motion.div
                                key={person.name}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 20,
                                    padding: "20px 0",
                                    borderBottom: "1px solid rgba(35,45,75,0.1)",
                                }}
                            >
                                <div
                                    style={{
                                        width: 56,
                                        height: 56,
                                        borderRadius: "50%",
                                        background: "var(--navy)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 900,
                                        fontSize: 18,
                                        color: "var(--orange)",
                                        flexShrink: 0,
                                        overflow: "hidden",
                                    }}
                                >
                                    {person.image ? (
                                        <img src={person.image} alt={person.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                    ) : (
                                        person.initials
                                    )}
                                </div>
                                <div>
                                    <div className="t-name" style={{ color: "var(--navy)" }}>
                                        {person.name}
                                    </div>
                                    <div
                                        style={{
                                            fontFamily: "Lora, serif",
                                            fontStyle: "italic",
                                            fontSize: 14,
                                            color: "var(--fog)",
                                        }}
                                    >
                                        {person.role}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pull quote band */}
            <section className="bg-(--navy) py-16 md:py-20 px-6 md:px-12">
                <div className="max-w-[800px] mx-auto">
                    <AnimatedSection>
                        <PullQuote
                            style={{ color: "#fff", fontSize: "clamp(20px, 2.5vw, 32px)" }}
                        >
                            "Authoritarian governments try to weaken democracy in many ways,
                            but people continue to resist."
                        </PullQuote>
                    </AnimatedSection>
                </div>
            </section>

            {/* 1H: Publications Strip */}
            <section className="p-0">
                <div
                    className="flex flex-col md:grid md:grid-cols-3"
                >
                    {[
                        {
                            bg: "var(--navy-deep)",
                            textColor: "#fff",
                            label: "PUBLICATIONS",
                            title: "Community Publications",
                            desc: '"Four volumes of scholarship, advocacy, and lived testimony."',
                            cta: "EXPLORE PUBLICATIONS →",
                            action: "/publications",
                            buttonClass: "text-white border-white group-hover:text-(--orange) group-hover:border-(--orange)",
                        },
                        {
                            bg: "var(--cream)",
                            textColor: "var(--ink)",
                            label: "JOURNAL",
                            title: "Transformations",
                            desc: "A Journal of Dialogue, Research, and Advocacy",
                            cta: "READ JOURNAL →",
                            action: "/publications",
                            buttonClass: "text-(--orange) border-(--orange) group-hover:text-(--navy) group-hover:border-(--navy)",
                        },
                        {
                            bg: "var(--orange)",
                            textColor: "#fff",
                            label: "PODCAST",
                            title: "The Power of Many",
                            desc: "Conversations with democratic advocates, researchers, and movement leaders from around the world.",
                            cta: "LISTEN NOW →",
                            action: "/publications",
                            buttonClass: "text-white border-white group-hover:text-(--navy) group-hover:border-(--navy)",
                        },
                    ].map((panel) => (
                        <motion.div
                            key={panel.title}
                            className="group"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                background: panel.bg,
                                padding: "48px 40px",
                                display: "flex",
                                flexDirection: "column",
                                gap: 16,
                                cursor: "pointer",
                            }}
                            onClick={() => navigate(panel.action)}
                        >
                            <div
                                className="t-label"
                                style={{
                                    color:
                                        panel.bg === "var(--orange)"
                                            ? "rgba(255,255,255,0.7)"
                                            : undefined,
                                }}
                            >
                                {panel.label}
                            </div>
                            <h3
                                style={{
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 28,
                                    color: panel.textColor,
                                    textTransform: "uppercase",
                                    lineHeight: 1.1,
                                    margin: 0,
                                }}
                            >
                                {panel.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "Lora, serif",
                                    fontSize: 15,
                                    color:
                                        panel.bg === "var(--orange)"
                                            ? "rgba(255,255,255,0.85)"
                                            : panel.textColor === "#fff"
                                                ? "rgba(255,255,255,0.75)"
                                                : "var(--fog)",
                                    lineHeight: 1.6,
                                    flex: 1,
                                    margin: 0,
                                }}
                            >
                                {panel.desc}
                            </p>
                            <span
                                className={`border px-4 py-2 transition-colors duration-300 ${panel.buttonClass}`}
                                style={{
                                    alignSelf: "flex-start",
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 14,
                                    letterSpacing: "2px",
                                    textTransform: "uppercase",
                                }}
                            >
                                {panel.cta}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
