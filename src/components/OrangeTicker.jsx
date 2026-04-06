import { motion } from "motion/react";

export default function OrangeTicker() {
    return (
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 60 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            style={{
                height: 3,
                background: "var(--orange)",
                marginBottom: 12,
            }}
        />
    );
}
