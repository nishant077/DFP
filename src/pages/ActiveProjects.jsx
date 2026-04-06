import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import OrangeTicker from "../components/OrangeTicker";
import ProjectAccordion from "../components/ProjectAccordion";
import { activeProjects } from "../data/activeProjects";

export default function ActiveProjects() {
    return (
        <div>
            {/* Hero */}
            <section
                className="relative min-h-[55vh] flex items-center justify-center text-center overflow-hidden bg-(--navy)"
                data-ocid="research.section"
            >
                <img
                    src="https://images.unsplash.com/photo-1569234934979-74f8f8e91a1c?w=1400&q=80"
                    alt="Research and advocacy"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                />
                <div className="noise-overlay absolute inset-0" />
                <div className="relative z-3 py-16 md:py-20 w-full flex flex-col items-center px-6 md:px-12 max-w-[1280px]">
                    <div className="t-label mb-3 text-center">OUR RESEARCH</div>
                    <OrangeTicker />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="t-section text-white mb-8 text-center"
                        style={{ fontSize: "clamp(48px,7vw,110px)" }}
                    >
                        RESEARCH PROJECTS
                    </motion.h1>
                    <div className="max-w-3xl text-center">
                        <p style={{ color: "rgba(255,255,255,0.95)", fontFamily: "Lora, serif", fontSize: "18px" }}>
                            "We are grounded in facts, data, and peer-reviewed research. However, we are unafraid to use that knowledge to challenge the status quo and demand structural change. Research must serve those resisting authoritarian power."
                        </p>
                    </div>
                </div>
            </section>

            {/* Accordion */}
            <section className="bg-white py-12 md:py-16">
                <div className="max-w-[1280px] mx-auto px-6 md:px-12">
                    <AnimatedSection style={{ marginBottom: 40 }}>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div>
                                <div className="t-label mb-3">ACTIVE INITIATIVES</div>
                                <OrangeTicker />
                            </div>
                            <span
                                className="font-bold text-[var(--fog)] tracking-[2px] text-[14px]"
                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                            >
                                {activeProjects.length} PROJECTS
                            </span>
                        </div>
                    </AnimatedSection>
                    <ProjectAccordion projects={activeProjects} />
                </div>
            </section>
        </div>
    );
}
