import { ExternalLink, Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function ProjectRow({ project, index }) {
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
        >
            <div
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="px-4 md:px-6 rounded-md"
                style={{
                    borderTop: "1px solid rgba(244,244,240,0.3)",
                    background: hovered ? "var(--orange-glow)" : "transparent",
                    transition: "background 0.2s",
                }}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center gap-4 md:gap-6 py-4 md:py-5 bg-transparent border-none cursor-pointer text-left focus:outline-none"
                    aria-expanded={isOpen}
                    data-ocid={`project.item.${index + 1}`}
                >
                    <span
                        className="font-black text-3xl md:text-[48px] min-w-[48px] md:min-w-[72px] leading-none transition-colors duration-200 shrink-0"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            color: hovered ? "var(--orange)" : "rgba(255,95,0,0.7)",
                        }}
                    >
                        {project.number}.
                    </span>
                    <span className="flex-1 min-w-0 pr-2 md:pr-4">
                        <span
                            className="font-bold text-xl md:text-[28px] text-(--navy) uppercase block break-words"
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                lineHeight: "1.2"
                            }}
                        >
                            {project.name}
                        </span>
                    </span>
                    <span
                        className="bg-(--orange) text-white px-2 py-0.5 md:py-1 rounded-sm font-bold text-[11px] md:text-[13px] whitespace-nowrap shrink-0"
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                        }}
                    >
                        {project.year}
                    </span>
                    <span className="text-(--orange) shrink-0 ml-1 md:ml-0">
                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                    </span>
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            style={{ overflow: "hidden" }}
                        >
                            <div className="pb-6 ml-2 md:ml-9 mt-2 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                                <div className="flex-1 border-l-[3px] md:border-l-4 border-(--orange) pl-4 md:pl-6">
                                    <p
                                        style={{
                                            fontFamily: "Lora, serif",
                                            fontSize: 16,
                                            color: "var(--ink)",
                                            lineHeight: 1.8,
                                            marginBottom: 16,
                                        }}
                                    >
                                        {project.description}
                                    </p>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexWrap: "wrap",
                                            gap: 8,
                                            marginBottom: 12,
                                        }}
                                    >
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                style={{
                                                    background: "rgba(255,95,0,0.1)",
                                                    color: "var(--orange)",
                                                    padding: "2px 10px",
                                                    borderRadius: 2,
                                                    fontFamily: "'Barlow Condensed', sans-serif",
                                                    fontWeight: 700,
                                                    fontSize: 12,
                                                    letterSpacing: "1px",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    {project.links && (
                                        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                                            {project.links.map((link) => (
                                                <a
                                                    key={link.url}
                                                    href={link.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    style={{
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: 4,
                                                        color: "var(--orange)",
                                                        fontFamily: "Lora, serif",
                                                        fontSize: 14,
                                                        textDecoration: "underline",
                                                    }}
                                                >
                                                    <ExternalLink size={12} />
                                                    {link.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                {project.image && (
                                    <div className="w-full md:w-[320px] shrink-0 mt-4 md:mt-0">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full aspect-video object-cover rounded-sm"
                                            style={{ boxShadow: "0 8px 24px rgba(35,45,75,0.15)" }}
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default function ProjectAccordion({ projects }) {
    return (
        <div>
            {projects.map((project, i) => (
                <ProjectRow key={project.id} project={project} index={i} />
            ))}
        </div>
    );
}
