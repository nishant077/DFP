import { Mail } from "lucide-react";
import { useRouter } from "../context/router";
import dfplogo from '../assets/DFPlogo.png';

export default function Footer() {
    const { navigate } = useRouter();
    const year = new Date().getFullYear();
    const hostname =
        typeof window !== "undefined" ? window.location.hostname : "";

    const links = [
        { label: "About", path: "/about" },
        { label: "People", path: "/people/governance" },
        { label: "Research", path: "/research/active-projects" },
        { label: "Publications", path: "/publications" },
        { label: "Contact", path: "/contact" },
    ];

    return (
        <footer
            style={{
                background: "var(--navy)",
                borderTop: "4px solid var(--orange)",
                // borderBottom: "4px solid var(--orange)",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Ghost text */}
            <div
                className="ghost-text flex items-center justify-center"
                style={{
                    fontSize: "clamp(80px, 20vw, 240px)",
                    color: "#fff",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                    opacity: 0.04,
                }}
                aria-hidden="true"
            >
                DEMOCRACY
            </div>

            <div
                style={{
                    maxWidth: 1280,
                    margin: "0 auto",
                    padding: "64px 24px 40px",
                    position: "relative",
                    zIndex: 2,
                }}
            >
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                        gap: 48,
                        marginBottom: 48,
                    }}
                >
                    {/* Col 1: Logo */}
                    <div>
                        <button
                            type="button"
                            onClick={() => navigate("/")}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                padding: 0,
                                textAlign: "left",
                                display: "block",
                                marginBottom: 16,
                            }}
                            data-ocid="nav.link"
                        >
                            <img
                                src={dfplogo}
                                alt="Democratic Futures Project"
                                style={{
                                    height: 48,
                                    width: "auto",
                                    objectFit: "contain",
                                }}
                            />
                        </button>
                        <p
                            style={{
                                fontFamily: "Lora, serif",
                                fontStyle: "italic",
                                fontSize: 18,
                                color: "var(--orange)",
                                lineHeight: 1.4,
                                margin: 0,
                            }}
                        >
                            "Research in service of democratic struggle."
                        </p>
                    </div>

                    {/* Col 2: Quick Links */}
                    <div>
                        <div
                            className="t-label"
                            style={{ marginBottom: 16, color: "rgba(255,255,255,0.5)" }}
                        >
                            Quick Links
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {links.map((link) => (
                                <button
                                    type="button"
                                    key={link.path}
                                    onClick={() => navigate(link.path)}
                                    style={{
                                        background: "none",
                                        border: "none",
                                        cursor: "pointer",
                                        color: "rgba(255,255,255,0.75)",
                                        fontFamily: "'Barlow Condensed', sans-serif",
                                        fontWeight: 700,
                                        fontSize: 15,
                                        letterSpacing: "1px",
                                        textAlign: "left",
                                        padding: 0,
                                        textTransform: "uppercase",
                                    }}
                                    data-ocid="nav.link"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Col 3: Connect */}
                    <div>
                        <div
                            className="t-label"
                            style={{ marginBottom: 16, color: "rgba(255,255,255,0.5)" }}
                        >
                            Connect
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            <a
                                href="mailto:sjp3st@virginia.edu"
                                style={{
                                    color: "rgba(255,255,255,0.75)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 8,
                                    fontFamily: "Lora, serif",
                                    fontSize: 14,
                                    textDecoration: "none",
                                }}
                            >
                                <Mail size={14} />
                                Email
                            </a>
                        </div>
                    </div>

                    {/* Col 4: Funded By */}
                    <div>
                        <div
                            className="t-label"
                            style={{ marginBottom: 16, color: "rgba(255,255,255,0.5)" }}
                        >
                            Funded By
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>

                            <a
                                href="https://cgii.virginia.edu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "rgba(255,255,255,0.75)",
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    textDecoration: "none",
                                    borderBottom: "1px solid var(--orange)",
                                    display: "inline-block",
                                    paddingBottom: 2,
                                }}
                            >
                                Center for Global Inquiry and Innovation
                            </a>
                            <a
                                href="https://jeffersontrust.org/"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    color: "rgba(255,255,255,0.75)",
                                    fontFamily: "'Barlow Condensed', sans-serif",
                                    fontWeight: 700,
                                    fontSize: 16,
                                    textDecoration: "none",
                                    borderBottom: "1px solid var(--orange)",
                                    display: "inline-block",
                                    paddingBottom: 2,
                                }}
                            >
                                Jefferson Trust
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: 24,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "Lora, serif",
                            fontSize: 13,
                            color: "rgba(255,255,255,0.5)",
                            margin: 0,
                        }}
                    >
                        © {year} Democratic Futures Project.
                        All rights reserved.
                    </p>

                </div>
            </div>
        </footer>
    );
}
