import { motion } from "motion/react";
import { useState } from "react";

export default function PersonCard({ person }) {
    const [imgError, setImgError] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const [hovered, setHovered] = useState(false);

    const linkedinLink = person.links?.find((l) => l.label.toLowerCase() === "linkedin")?.url;

    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.2 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            style={{
                background: "#fff",
                boxShadow: hovered
                    ? "0 20px 60px rgba(35,45,75,0.2)"
                    : "0 4px 20px rgba(35,45,75,0.08)",
                borderLeft: hovered
                    ? "4px solid var(--orange)"
                    : "4px solid transparent",
                transition: "box-shadow 0.2s, border-color 0.2s",
                overflow: "hidden",
            }}
        >
            {/* Photo area */}
            <div
                style={{ position: "relative", aspectRatio: "1/1", overflow: "hidden" }}
            >
                {imgError ? (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "var(--navy)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 900,
                            fontSize: "clamp(32px, 6vw, 64px)",
                            color: "var(--orange)",
                            letterSpacing: "-2px",
                        }}
                    >
                        {person.initials}
                    </div>
                ) : (
                    <img
                        src={person.image}
                        alt={person.name}
                        onError={() => setImgError(true)}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center top",
                            filter: hovered
                                ? "grayscale(40%) contrast(1.05) brightness(1.0)"
                                : "grayscale(100%) contrast(1.15) brightness(0.9)",
                            transition: "filter 0.4s",
                            display: "block",
                        }}
                    />
                )}
                {/* Name overlay */}
                {!imgError && (
                    <div
                        style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background:
                                "linear-gradient(to top, var(--navy-deep) 0%, transparent 100%)",
                            padding: "32px 16px 12px",
                        }}
                    >
                        <div
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 22,
                                color: "#fff",
                                textTransform: "uppercase",
                                lineHeight: 1.1,
                            }}
                        >
                            {linkedinLink ? (
                                <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} className="hover:underline hover:text-(--orange) transition-colors">
                                    {person.name}
                                </a>
                            ) : (
                                person.name
                            )}
                        </div>
                        <div
                            style={{
                                fontFamily: "Lora, serif",
                                fontStyle: "italic",
                                fontSize: 13,
                                color: "var(--fog)",
                            }}
                        >
                            {person.affiliation}
                        </div>
                    </div>
                )}
            </div>

            {/* Card body */}
            <div style={{ padding: "16px 20px 20px" }}>
                <div className="t-label" style={{ marginBottom: 8 }}>
                    {person.role}
                </div>
                {imgError && (
                    <div
                        style={{
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: 20,
                            color: "var(--navy)",
                            textTransform: "uppercase",
                            marginBottom: 4,
                        }}
                    >
                        {linkedinLink ? (
                            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }} className="hover:underline hover:text-(--orange) transition-colors">
                                {person.name}
                            </a>
                        ) : (
                            person.name
                        )}
                    </div>
                )}
                <div
                    style={{
                        fontFamily: "Lora, serif",
                        fontSize: 15,
                        color: "var(--ink)",
                        lineHeight: 1.65,
                        overflow: "hidden",
                        maxHeight: expanded ? "none" : 90,
                        maskImage: expanded
                            ? "none"
                            : "linear-gradient(to bottom, black 60%, transparent 100%)",
                        WebkitMaskImage: expanded
                            ? "none"
                            : "linear-gradient(to bottom, black 60%, transparent 100%)",
                    }}
                    dangerouslySetInnerHTML={{ __html: person.bio }}
                />
                <button
                    type="button"
                    onClick={() => setExpanded(!expanded)}
                    style={{
                        marginTop: 12,
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: 12,
                        letterSpacing: "2px",
                        color: "var(--orange)",
                        textTransform: "uppercase",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                    }}
                >
                    {expanded ? "SHOW LESS ↑" : "READ MORE ↓"}
                </button>
            </div>
        </motion.div>
    );
}