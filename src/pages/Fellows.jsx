import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import OrangeTicker from "../components/OrangeTicker";
import PersonCard from "../components/PersonCard";
import { alumFellows, currentFellows } from "../data/fellows";


export default function Fellows() {
    const fellowsAsPersons = currentFellows.map((f) => ({
        id: f.id,
        name: f.name,
        image: f.image,
        initials: f.initials,
        role: "Undergraduate Fellow",
        affiliation: "University of Virginia",
        category: "fellow",
        bio: f.bio,
        links: f.links,
    }));

    return (
        <div>
            {/* Hero */}
            <section
                className="bg-[var(--cream)] overflow-hidden max-w-full"
                data-ocid="fellows.section"
            >
                <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20 flex flex-col lg:grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
                    <div style={{ maxWidth: 720 }} className="w-full">
                        <div className="t-label mb-3">
                            DEMOCRATIC FUTURES UNDERGRADUATE FELLOWS
                        </div>
                        <OrangeTicker />
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="t-section text-[var(--navy)] mb-6"
                            style={{ fontSize: "clamp(48px,7vw,110px)" }}
                        >
                            THE NEXT<br /> GENERATION OF<br /> DEMOCRATIC ACTORS
                        </motion.h1>
                        <blockquote className="border-l-4 border-[var(--orange)] pl-6 m-0">
                            <p
                                className="italic text-[var(--navy)] leading-[1.5] m-0 text-xl"
                                style={{ fontFamily: "Lora, serif" }}
                            >
                                "Universities have a responsibility beyond neutrality. Students
                                are not passive learners. They are democratic actors."
                            </p>
                        </blockquote>
                    </div>

                    {/* Circular grid of initials */}
                    <div className="relative mx-auto lg:mx-0 shrink-0 transform scale-[0.85] sm:scale-100 origin-center" style={{ width: 400, height: 400 }}>
                        {/* Decorative inner ring */}
                        <div
                            className="absolute top-1/2 left-1/2 rounded-full border-[1.5px] border-dashed border-(--orange) opacity-40 pointer-events-none"
                            style={{ width: 270, height: 270, transform: "translate(-50%, -50%)" }}
                        />

                        {currentFellows.map((f, i) => {
                            const isRight = i % 2 === 1;
                            // Calculate angle for perfect circular orbit
                            const angle = (i / currentFellows.length) * 2 * Math.PI - Math.PI / 2;
                            const radius = 135;
                            const size = 130;

                            const left = 200 + radius * Math.cos(angle);
                            const top = 200 + radius * Math.sin(angle);

                            return (
                                <motion.div
                                    key={f.id}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                                    className="absolute rounded-full flex items-center justify-center font-black text-[var(--orange)] shadow-xl"
                                    style={{
                                        width: size,
                                        height: size,
                                        top: top,
                                        left: left,
                                        marginTop: -size / 2,
                                        marginLeft: -size / 2,
                                        zIndex: 10 - i,
                                        backgroundColor: isRight ? "var(--ink)" : "var(--navy)",
                                        fontSize: "44px",
                                        letterSpacing: "-1px",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                    }}
                                >
                                    {f.initials}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Current Fellows Grid */}
            <section className="bg-white py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <AnimatedSection style={{ marginBottom: 48 }}>
                        <div className="t-label mb-3">CURRENT FELLOWS</div>
                        <OrangeTicker />
                    </AnimatedSection>
                    <div
                        className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        data-ocid="fellows.list"
                    >
                        {fellowsAsPersons.map((person, i) => (
                            <AnimatedSection key={person.id} delay={i * 0.08}>
                                <PersonCard person={person} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alumni Fellows */}
            <section className="bg-[var(--navy)] py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <AnimatedSection style={{ marginBottom: 80 }}>
                        <div
                            className="t-label mb-3"
                            style={{ color: "#fff", letterSpacing: "2px", fontWeight: 700 }}
                        >
                            ALUMNI · DEMOCRATIC FUTURES UNDERGRADUATE FELLOWS
                        </div>
                        <OrangeTicker />
                    </AnimatedSection>
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-24 lg:gap-x-48"
                        data-ocid="fellows.alumni.list"
                    >
                        {alumFellows.map((fellow, i) => (
                            <motion.div
                                key={fellow.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.04 }}
                                className="max-w-[400px] w-full pb-8"
                                style={{ borderBottom: "1px solid rgba(255,255,255,0.2)" }}
                                data-ocid={`fellows.alumni.item.${i + 1}`}
                            >
                                <div
                                    className="font-bold text-white uppercase text-[24px]"
                                    style={{ fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: "1px" }}
                                >
                                    {fellow.name}
                                </div>
                                <div
                                    className="text-white mt-2 text-[14px] leading-tight"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    {fellow.field}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
