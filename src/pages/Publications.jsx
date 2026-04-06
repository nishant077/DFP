import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import OrangeTicker from "../components/OrangeTicker";
import { books } from "../data/publications";

export default function Publications() {
    return (
        <div>
            {/* Hero */}
            <section
                className="noise-overlay bg-[var(--navy)] px-6 md:px-12 py-16 md:py-24 text-center"
                data-ocid="publications.section"
            >
                <div className="max-w-[960px] mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-black text-white uppercase leading-[0.9] mb-8"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontSize: "clamp(48px,7vw,110px)",
                        }}
                    >
                        WORDS MATTER.
                    </motion.h1>
                    <div className="max-w-3xl mx-auto text-lg">
                        <p style={{ color: "rgba(255,255,255,0.95)", fontFamily: "Lora, serif" }}>
                            "We believe that the way we speak about rights shapes the reality
                            of rights. We reclaim language to amplify the voices of the
                            silenced."
                        </p>
                    </div>
                </div>
            </section>

            {/* Books */}
            <section className="bg-[var(--cream)] py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                    <AnimatedSection style={{ marginBottom: 48 }}>
                        <div className="t-label mb-3">COMMUNITY PUBLICATIONS</div>
                        <OrangeTicker />
                        <p
                            className="text-[var(--fog)] mt-2 text-[16px]"
                            style={{ fontFamily: "Lora, serif" }}
                        >
                            Books produced in partnership with democratic advocates and
                            scholars worldwide.
                        </p>
                    </AnimatedSection>
                    <div
                        className="grid gap-6"
                        style={{
                            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                        }}
                        data-ocid="publications.list"
                    >
                        {books.map((book, i) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="cursor-pointer"
                                data-ocid={`publications.item.${i + 1}`}
                            >
                                {/* Book cover */}
                                <div className="bg-[var(--navy)] aspect-[3/4] flex flex-col items-center justify-center p-6 mb-4 border-b-4 border-[var(--orange)]">
                                    <div
                                        className="font-black text-[var(--orange)] uppercase text-center leading-[1.2]"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontSize: "clamp(14px, 2vw, 20px)",
                                        }}
                                    >
                                        {book.title}
                                    </div>
                                    {book.note && (
                                        <div
                                            className="mt-4 italic text-center text-[12px]"
                                            style={{
                                                fontFamily: "Lora, serif",
                                                color: "rgba(255,255,255,0.5)",
                                            }}
                                        >
                                            ({book.note})
                                        </div>
                                    )}
                                </div>
                                <p
                                    className="font-bold text-[var(--ink)] uppercase leading-[1.2] mb-1 text-[16px]"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                >
                                    {book.title}
                                </p>
                                <p
                                    className="italic text-[var(--fog)] mb-2 text-[13px]"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    {book.publisher}
                                </p>
                                <a
                                    href={book.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[var(--orange)] font-bold uppercase no-underline tracking-[2px] text-[13px]"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                    data-ocid="publications.link"
                                >
                                    GET THE BOOK →
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transformations Journal */}
            <section className="bg-white py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto px-8 md:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                    <div className="w-full md:w-3/5">
                        <AnimatedSection>
                            <div className="border-l-4 border-[var(--orange)] pl-8">
                                <div className="t-label mb-3">JOURNAL</div>
                                <h2 className="t-section text-[var(--navy)] mb-3">
                                    TRANSFORMATIONS
                                </h2>
                                <p
                                    className="italic text-[var(--fog)] mb-5 text-[20px]"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    A Journal of Dialogue, Research, and Advocacy
                                </p>
                                <p
                                    className="leading-[1.75] mb-7 max-w-[560px] text-[var(--ink)] text-[16px]"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    Transformations is DFP's journal hosting original research,
                                    advocacy documentation, and student scholarship at the
                                    intersection of democratic theory and practice.
                                </p>
                                <div className="flex gap-3 flex-wrap">
                                    <button
                                        type="button"
                                        className="bg-[var(--orange)] text-white border-none px-6 py-3 font-bold uppercase cursor-pointer rounded-sm tracking-[2px] text-[14px]"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                        data-ocid="publications.primary_button"
                                        onClick={() =>
                                            document
                                                .getElementById("journal-issues")
                                                ?.scrollIntoView({ behavior: "smooth" })
                                        }
                                    >
                                        CURRENT ISSUES
                                    </button>
                                    <a
                                        href="https://gfptransformations.org/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-transparent text-[var(--navy)] border-2 border-[var(--navy)] px-6 py-3 font-bold uppercase no-underline rounded-sm inline-block tracking-[2px] text-[14px]"
                                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                        data-ocid="publications.secondary_button"
                                    >
                                        FULL ARCHIVE →
                                    </a>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="w-full md:w-2/5 mt-4 md:mt-0">
                        <AnimatedSection delay={0.2}>
                            <div className="bg-(--navy) px-6 md:px-10 py-12 text-center shadow-lg">
                                <div
                                    className="font-black text-white uppercase leading-none mb-4"
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: "clamp(32px, 4vw, 56px)",
                                    }}
                                >
                                    TRANSFORMATIONS
                                </div>
                                <div
                                    className="italic text-[var(--fog)] mb-6 text-[14px]"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    A Journal of Dialogue,
                                    <br />
                                    Research, and Advocacy
                                </div>
                                <div
                                    className="border-t-2 border-(--orange) pt-4 font-bold text-(--orange) tracking-[3px] text-[13px]"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                                >
                                    DEMOCRATIC FUTURES PROJECT
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Issues placeholder */}
                <div id="journal-issues" className="max-w-[1280px] mt-12 mx-auto px-8 md:px-12">
                    <div className="border-t border-[rgba(35,45,75,0.15)] pt-10">
                        <div className="t-label mb-4">CURRENT ISSUES</div>
                        <div
                            className="bg-[var(--cream)] p-12 text-center"
                            data-ocid="publications.empty_state"
                        >
                            <p
                                className="italic text-[var(--fog)] m-0 text-[18px]"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                Issues will be available here shortly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Podcast */}
            <section className="flex flex-col md:flex-row min-h-[480px]">
                {/* Left */}
                <div
                    className="noise-overlay bg-[var(--navy)] px-8 md:px-14 py-16 flex flex-col justify-center w-full md:w-3/5"
                >
                    <div className="t-label mb-3">PODCAST</div>
                    <OrangeTicker />
                    <h2 className="t-section text-white mb-4">THE POWER OF MANY</h2>
                    <p
                        className="italic leading-[1.6] mb-2 text-[18px]"
                        style={{
                            fontFamily: "Lora, serif",
                            color: "rgba(255,255,255,0.8)",
                        }}
                    >
                        Conversations with democratic advocates, researchers, and movement
                        leaders from around the world.
                    </p>
                    <p
                        className="text-[var(--fog)] mb-6 text-[14px]"
                        style={{ fontFamily: "Lora, serif" }}
                    >
                        Produced by Roberto Armengol
                    </p>
                    <div className="flex gap-3 flex-wrap mb-6">
                        <a
                            href="https://global.virginia.edu/power-of-many"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[var(--orange)] text-white px-7 py-3 font-bold uppercase no-underline rounded-sm tracking-[2px] text-[14px]"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                            data-ocid="publications.primary_button"
                        >
                            LISTEN NOW →
                        </a>
                    </div>
                    <p
                        className="text-[var(--fog)] text-lg"
                        style={{ fontFamily: "Lora, serif" }}
                    >

                        <a
                            href="https://medialab.virginia.edu/democracyindanger"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--orange)] underline"
                        >
                            Democracy in Danger
                        </a>{" "}
                        <br />

                        "A predecessor podcast on the rise of illiberal and autocratic regimes."
                    </p>
                </div>

                {/* Right */}
                <div
                    className="bg-[var(--cream)] px-8 md:px-12 py-16 flex flex-col items-center justify-center gap-8 w-full md:w-2/5"
                >
                    <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full bg-[var(--navy)] flex flex-col items-center justify-center p-6 shrink-0">
                        <div
                            className="font-black text-white uppercase text-center leading-[1.1] mb-2 text-[22px]"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                            THE POWER OF MANY
                        </div>
                        <div
                            className="font-bold text-[var(--orange)] tracking-[3px] uppercase text-[11px]"
                            style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                        >
                            DFP · PODCAST
                        </div>
                    </div>
                    <div className="waveform">
                        <div
                            className="waveform-bar"
                            style={{ height: 24, animationDelay: "0s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 40, animationDelay: "0.1s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 32, animationDelay: "0.2s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 48, animationDelay: "0.3s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 36, animationDelay: "0.4s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 28, animationDelay: "0.5s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 44, animationDelay: "0.6s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 38, animationDelay: "0.7s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 32, animationDelay: "0.8s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 48, animationDelay: "0.9s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 24, animationDelay: "1.0s" }}
                        />
                        <div
                            className="waveform-bar"
                            style={{ height: 40, animationDelay: "1.1s" }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
