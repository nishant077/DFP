import { motion } from "motion/react";

export default function AnimatedSection({
    children,
    delay = 0,
    className = "",
    style,
}) {
    return (
        <motion.div
            className={className}
            style={style}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
}
