import { motion } from "motion/react";
import { useState } from "react";
import OrangeTicker from "../components/OrangeTicker";
import { facultyAllies, governance } from "../data/governancefacultyallies";
import AnimatedSection from "../components/AnimatedSection";
import PersonCard from "../components/PersonCard";
import governancepage from '../assets/governance.jpeg';


const filterOptions = [
    { value: "all", label: "All" },
    { value: "governance", label: "Governance" },
    { value: "faculty-advocates", label: "Faculty & Advocates Allies" },
];

export default function GovernanceFacultyAdvocates() {
    const [filter, setFilter] = useState("all");

    const allPeople = [...governance, ...facultyAllies];

    const filtered =
        filter === "all"
            ? allPeople
            : filter === "governance"
                ? governance
                : facultyAllies;

    return (
        <div>
            <section
                className="relative min-h-[55vh] flex items-center justify-center text-center overflow-hidden bg-(--navy)"
                data-ocid="research.section"
            >
                <img
                    src={governancepage}
                    alt="Research and advocacy"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="noise-overlay absolute inset-0" />
                <div className="relative z-3 py-16 md:py-20 w-full flex flex-col items-center px-6 max-w-[1280px] mx-auto">
                    <div className="t-label mb-3 text-center">OUR LEADERSHIP</div>
                    <OrangeTicker />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="t-section text-white mb-8 text-center"
                        style={{ fontSize: "clamp(48px,7vw,110px)" }}
                    >
                        GOVERNANCE & FACULTY & ADVOCATE ALLIES
                    </motion.h1>
                    <div className="max-w-3xl text-center">
                        <p style={{ color: "rgba(255,255,255,0.95)", fontFamily: "Lora, serif", fontSize: "18px" }}>
                            Authoritarian governments try to weaken democracy in many ways, but people continue
                            to resist. We believe research should stand with those defending freedom. When
                            scholars, students, and advocates work together, knowledge can help protect and
                            strengthen democracy.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-(--cream) px-6 py-16">
                <div className="max-w-[1280px] mx-auto">
                    <div className="flex items-center justify-between flex-wrap gap-6 mb-12">
                        <div>
                            <div className="t-label mb-3">THE NETWORK</div>
                            <OrangeTicker />
                            <p
                                className="mt-2 text-[var(--fog)] text-[16px]"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                {filtered.length} member{filtered.length !== 1 ? "s" : ""}
                            </p>
                        </div>

                        {/* Inline filter buttons */}
                        <div className="flex gap-3 flex-wrap" data-ocid="faculty.filter.tab">
                            {filterOptions.map((opt) => (
                                <motion.button
                                    key={opt.value}
                                    layout
                                    onClick={() => setFilter(opt.value)}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        padding: "8px 20px",
                                        borderRadius: 2,
                                        border: "1.5px solid var(--navy)",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 13,
                                        letterSpacing: "2px",
                                        textTransform: "uppercase",
                                        cursor: "pointer",
                                        transition: "background 0.2s, color 0.2s",
                                        background: filter === opt.value ? "var(--navy)" : "transparent",
                                        color: filter === opt.value ? "#fff" : "var(--navy)",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 6,
                                    }}
                                >
                                    {filter === opt.value && (
                                        <span style={{ color: "var(--orange)", fontSize: 8 }}>●</span>
                                    )}
                                    {opt.label}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div
                        className="grid gap-7"
                        style={{
                            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        }}
                        data-ocid="faculty.list"
                    >
                        {filtered.map((person, i) => (
                            <AnimatedSection key={person.id} delay={i * 0.06}>
                                <PersonCard person={person} />
                            </AnimatedSection>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div
                            className="text-center p-16 text-[var(--fog)]"
                            data-ocid="faculty.empty_state"
                        >
                            <p className="text-[18px]" style={{ fontFamily: "Lora, serif" }}>
                                No members found for this filter.
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
