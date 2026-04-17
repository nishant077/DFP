import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import dfplogo from '../assets/DFPlogo.png'


export default function Preloader({ onComplete }) {
    const [count, setCount] = useState(0);
    const [done, setDone] = useState(false);

    useEffect(() => {
        let frame;
        let start = null;
        const duration = 2400; // ms to count from 0 to 100

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
            setCount(progress);

            if (progress < 100) {
                frame = requestAnimationFrame(step);
            } else {
                setTimeout(() => setDone(true), 400);
                setTimeout(() => onComplete(), 1000);
            }
        };

        frame = requestAnimationFrame(step);
        return () => cancelAnimationFrame(frame);
    }, [onComplete]);

    return (
        <AnimatePresence>
            {!done && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        background: "var(--navy, #1a2744)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    {/* Background subtle grain */}
                    <div className="noise-overlay" style={{ position: "absolute", inset: 0, opacity: 0.3 }} />

                    {/* Center title */}
                    <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "0 24px" }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 700,
                                fontSize: 14,
                                letterSpacing: "4px",
                                textTransform: "uppercase",
                                color: "var(--orange, #e8652d)",
                                marginBottom: 16,
                            }}
                        >
                            Welcome to
                        </motion.div>
                        <motion.img
                            src={dfplogo}
                            alt="Democratic Futures Project"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            style={{
                                width: "clamp(200px, 50vw, 500px)",
                                height: "auto",
                                objectFit: "contain",
                                margin: 0,
                            }}
                        />

                        {/* Animated orange line */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
                            style={{
                                height: 3,
                                background: "var(--orange, #e8652d)",
                                marginTop: 24,
                                transformOrigin: "left",
                            }}
                        />
                    </div>

                    {/* Counter — bottom right */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        style={{
                            position: "absolute",
                            bottom: 40,
                            right: 48,
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: "clamp(48px, 10vw, 96px)",
                            color: "var(--orange, #e8652d)",
                            lineHeight: 1,
                            letterSpacing: "-2px",
                            userSelect: "none",
                        }}
                    >
                        {String(count).padStart(3, "0")}
                        <span style={{ fontSize: "0.5em", verticalAlign: "super" }}>
                            %
                        </span>
                    </motion.div>

                    {/* Small readable counter — bottom right below big one */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        style={{
                            position: "absolute",
                            bottom: 20,
                            right: 52,
                            fontFamily: "'Barlow Condensed', sans-serif",
                            fontWeight: 700,
                            fontSize: 14,
                            letterSpacing: "2px",
                            color: "rgba(255,255,255,0.5)",
                        }}
                    >
                        LOADING {count}%
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
