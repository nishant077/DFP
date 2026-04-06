import { motion } from "motion/react";

const options = [
    { value: "all", label: "All Allies" },
    { value: "faculty", label: "Faculty" },
    { value: "advocate", label: "Advocates" },
];

export default function Filterbar({ active, onChange }) {
    return (
        <div className="flex gap-3 flex-wrap" data-ocid="faculty.filter.tab">
            {options.map((opt) => (
                <motion.button
                    key={opt.value}
                    layout
                    onClick={() => onChange(opt.value)}
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
                        background: active === opt.value ? "var(--navy)" : "transparent",
                        color: active === opt.value ? "#fff" : "var(--navy)",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                    }}
                >
                    {active === opt.value && (
                        <span style={{ color: "var(--orange)", fontSize: 8 }}>●</span>
                    )}
                    {opt.label}
                </motion.button>
            ))}
        </div>
    );
}
