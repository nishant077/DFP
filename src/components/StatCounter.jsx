import { useEffect, useRef, useState } from "react";

export default function StatCounter({ target, suffix = "", label }) {
    const ref = useRef(null);
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 },
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        let startTime = 0;
        const duration = 1500;
        const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
            else setCount(target);
        };
        requestAnimationFrame(animate);
    }, [started, target]);

    return (
        <div ref={ref} className="flex flex-col items-center gap-2">
            <span
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(80px, 12vw, 160px)",
                    color: "#fff",
                    lineHeight: 1,
                }}
            >
                {count}
                {suffix}
            </span>
            <span
                style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: 14,
                    letterSpacing: "4px",
                    color: "var(--orange)",
                    textTransform: "uppercase",
                }}
            >
                {label}
            </span>
        </div>
    );
}
