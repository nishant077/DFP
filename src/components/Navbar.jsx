import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useRouter } from "../context/router";

const navLinks = [
    { label: "ABOUT", path: "/about" },
    {
        label: "PEOPLE",
        dropdown: [
            { label: "Governance and Faculty & Allies", path: "/people/governance&faculty-allies" },
            { label: "Fellows", path: "/people/fellows" },
            { label: "Partners", path: "/people/partners" },
        ],
    },
    {
        label: "RESEARCH",
        dropdown: [
            { label: "Active Projects", path: "/research/active-projects" },
            { label: "Past Projects", path: "/research/past-projects" },
        ],
    },
    { label: "PUBLICATIONS", path: "/publications" },
    { label: "CONTACT", path: "/contact" },
];

export default function Navbar() {
    const { navigate } = useRouter();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavigate = (p) => {
        navigate(p);
        setMobileOpen(false);
        setOpenDropdown(null);
    };

    return (
        <>
            <nav
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    background: scrolled ? "rgba(35,45,75,0.92)" : "var(--navy)",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    borderBottom: "3px solid var(--orange)",
                    transition: "background 0.3s",
                }}
            >
                <div
                    style={{
                        maxWidth: 1280,
                        margin: "0 auto",
                        padding: "0 24px",
                        height: 64,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo */}
                    <button
                        type="button"
                        onClick={() => handleNavigate("/")}
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            padding: 0,
                        }}
                        data-ocid="nav.link"
                    >
                        <span
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 900,
                                fontSize: 22,
                                color: "#fff",
                                lineHeight: 1.1,
                                textTransform: "uppercase",
                            }}
                        >
                            DEMOCRATIC
                        </span>
                        <span
                            style={{
                                fontFamily: "'Barlow Condensed', sans-serif",
                                fontWeight: 900,
                                fontSize: 16,
                                color: "var(--orange)",
                                lineHeight: 1,
                                textTransform: "uppercase",
                            }}
                        >
                            FUTURES PROJECT
                        </span>
                    </button>

                    {/* Desktop nav */}
                    <div
                        style={{
                            display: "none",
                            alignItems: "center",
                            gap: 32,
                        }}
                        className="lg-nav"
                    >
                        {navLinks.map((link) => (
                            <div
                                key={link.label}
                                style={{ position: "relative" }}
                                onMouseEnter={() =>
                                    "dropdown" in link ? setOpenDropdown(link.label) : undefined
                                }
                                onMouseLeave={() => setOpenDropdown(null)}
                            >
                                {"dropdown" in link ? (
                                    <button
                                        type="button"
                                        className="dfp-nav-link"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 13,
                                            letterSpacing: "2px",
                                            color: "#fff",
                                            textTransform: "uppercase",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 4,
                                            padding: "4px 0",
                                        }}
                                        data-ocid="nav.link"
                                    >
                                        {link.label}
                                        <ChevronDown size={12} />
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate(link.path)}
                                        className="dfp-nav-link"
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 700,
                                            fontSize: 13,
                                            letterSpacing: "2px",
                                            color: "#fff",
                                            textTransform: "uppercase",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            padding: "4px 0",
                                        }}
                                        data-ocid="nav.link"
                                    >
                                        {link.label}
                                    </button>
                                )}

                                {"dropdown" in link && (
                                    <AnimatePresence>
                                        {openDropdown === link.label && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.15 }}
                                                style={{
                                                    position: "absolute",
                                                    top: "calc(100% + 8px)",
                                                    left: 0,
                                                    background: "var(--navy-deep)",
                                                    minWidth: 200,
                                                    paddingTop: 8,
                                                    paddingBottom: 8,
                                                    zIndex: 100,
                                                    borderTop: "2px solid var(--orange)",
                                                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                                                }}
                                            >
                                                {link.dropdown.map((item, i) => (
                                                    <motion.button
                                                        key={item.path}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.06 }}
                                                        onClick={() => handleNavigate(item.path)}
                                                        style={{
                                                            display: "block",
                                                            width: "100%",
                                                            textAlign: "left",
                                                            padding: "10px 20px",
                                                            fontFamily: "'Barlow Condensed', sans-serif",
                                                            fontWeight: 700,
                                                            fontSize: 13,
                                                            letterSpacing: "2px",
                                                            color: "#fff",
                                                            textTransform: "uppercase",
                                                            background: "none",
                                                            border: "none",
                                                            cursor: "pointer",
                                                        }}
                                                        data-ocid="nav.link"
                                                    >
                                                        {item.label}
                                                    </motion.button>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Hamburger */}
                    <button
                        type="button"
                        style={{
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#fff",
                            padding: 8,
                        }}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Open menu"
                        data-ocid="nav.open_modal_button"
                    >
                        <Menu size={24} />
                    </button>
                </div>
            </nav>

            {/* Desktop nav styles via inline media query workaround */}
            <style>{`
        @media (min-width: 1024px) {
          .lg-nav { display: flex !important; }
          nav button[aria-label="Open menu"] { display: none !important; }
        }
      `}</style>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            background: "var(--navy-deep)",
                            zIndex: 100,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 8,
                        }}
                    >
                        <button
                            type="button"
                            onClick={() => setMobileOpen(false)}
                            style={{
                                position: "absolute",
                                top: 20,
                                right: 24,
                                color: "#fff",
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                            }}
                            aria-label="Close menu"
                            data-ocid="nav.close_button"
                        >
                            <X size={32} />
                        </button>
                        {navLinks.map((link, i) => (
                            <div key={link.label}>
                                {"dropdown" in link ? (
                                    <div style={{ textAlign: "center" }}>
                                        <motion.div
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.07 }}
                                            style={{
                                                fontFamily: "'Barlow Condensed', sans-serif",
                                                fontWeight: 900,
                                                fontSize: 56,
                                                color: "rgba(255,255,255,0.4)",
                                                textTransform: "uppercase",
                                                lineHeight: 1.1,
                                            }}
                                        >
                                            {link.label}
                                        </motion.div>
                                        {link.dropdown.map((sub, j) => (
                                            <motion.button
                                                key={sub.path}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: i * 0.07 + j * 0.04 }}
                                                onClick={() => handleNavigate(sub.path)}
                                                style={{
                                                    display: "block",
                                                    width: "100%",
                                                    textAlign: "center",
                                                    fontFamily: "'Barlow Condensed', sans-serif",
                                                    fontWeight: 700,
                                                    fontSize: 22,
                                                    color: "var(--orange)",
                                                    background: "none",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    marginTop: 4,
                                                    textTransform: "uppercase",
                                                }}
                                                data-ocid="nav.link"
                                            >
                                                {sub.label}
                                            </motion.button>
                                        ))}
                                    </div>
                                ) : (
                                    <motion.button
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.07 }}
                                        onClick={() => handleNavigate(link.path)}
                                        style={{
                                            fontFamily: "'Barlow Condensed', sans-serif",
                                            fontWeight: 900,
                                            fontSize: 56,
                                            color: "#fff",
                                            textTransform: "uppercase",
                                            background: "none",
                                            border: "none",
                                            cursor: "pointer",
                                            lineHeight: 1.1,
                                            display: "block",
                                            textAlign: "center",
                                        }}
                                        data-ocid="nav.link"
                                    >
                                        {link.label}
                                    </motion.button>
                                )}
                            </div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
