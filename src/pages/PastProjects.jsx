import { motion } from "motion/react";
import { pastProjects } from "../data/pastprojects";

export default function PastProjects() {
    return (
        <div>
            {/* Hero */}
            <section
                className="bg-(--cream) px-12 py-24 flex flex-col items-center justify-center text-center"
                data-ocid="past-projects.section"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="font-black text-(--navy) uppercase mt-0 mb-4"
                    style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "clamp(48px,7vw,110px)",
                        lineHeight: 1,
                    }}
                >
                    PAST PROJECTS
                </motion.h1>
                <p
                    className="italic text-xl md:text-2xl text-(--fog)"
                    style={{ fontFamily: "Lora, serif", color: "#8a8f9a" }}
                >
                    "Earlier partnerships and completed research from DFP's history."
                </p>
            </section>

            {/* List */}
            <section className="p-0 flex flex-col items-center">
                {pastProjects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="w-full flex justify-center py-20 px-8 md:px-12"
                        style={{
                            background: i % 2 !== 0 ? "var(--cream)" : "#ffffff",
                        }}
                        data-ocid={`past-projects.item.${i + 1}`}
                    >
                        <div className=" w-full flex flex-col md:flex-row gap-8 md:gap-12 items-stretch py-2">
                            <div className={`flex-1 border-l-4 border-(--orange) pl-6 md:pl-10 flex flex-col justify-center ${i % 2 === 0 ? "md:order-2" : "md:order-1"}`}>
                                <h2
                                    className="font-bold text-(--navy) uppercase mb-6"
                                    style={{
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontSize: "clamp(24px, 3vw, 36px)",
                                        lineHeight: 1.1,
                                        letterSpacing: "1px",
                                    }}
                                >
                                    {project.name}
                                </h2>
                                <p
                                    className="m-0 text-(--ink) text-base md:text-[17px] leading-[1.8]"
                                    style={{ fontFamily: "Lora, serif" }}
                                >
                                    {project.description}
                                </p>
                            </div>

                            {project.image && (
                                <div className={`w-full md:w-[500px] shrink-0 mt-6 md:mt-0 flex flex-col ${i % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full min-h-[220px] object-cover rounded-sm shadow-md flex-1"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                ))}
            </section>
        </div>
    );
}
