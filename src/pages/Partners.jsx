import { motion } from "motion/react";
import AnimatedSection from "../components/AnimatedSection";
import OrangeTicker from "../components/OrangeTicker";
import PersonCard from "../components/PersonCard";
import partnersheroimage from '../assets/Partnershero.png';

const partners = [
    {
        id: "world-liberty-congress",
        name: "World Liberty Congress",
        image: "",
        initials: "WL",
        role: "Global Democracy Network",
        affiliation: "",
        category: "partner",
        bio: "A global network of pro-democracy movements working to support and connect democratic activists across authoritarian contexts.",
        links: [],
    },
    {
        id: "artlords",
        name: "ArtLords",
        image: "",
        initials: "AL",
        role: "Art & Social Change",
        affiliation: "",
        category: "partner",
        bio: "An Afghan-led grassroots movement using art as a tool for social change, accountability, and democratic engagement.",
        links: [],
    },
    {
        id: "alliance-citizen-engagement",
        name: "Alliance for Citizen Engagement",
        image: "",
        initials: "AC",
        role: "Civic Participation",
        affiliation: "",
        category: "partner",
        bio: "A nonpartisan organization dedicated to making politics more accessible and fostering informed civic participation among young people.",
        links: [],
    },
    {
        id: "charlottesville-free-clinic",
        name: "Charlottesville Free Clinic",
        image: "",
        initials: "CF",
        role: "Community Health",
        affiliation: "",
        category: "partner",
        bio: "A community health center providing free medical, dental, and mental health services to uninsured residents in the Charlottesville area.",
        links: [],
    },
    {
        id: "burmese-democratic-futures",
        name: "Burmese Democratic Futures Working Group",
        image: "",
        initials: "BD",
        role: "Policy Research",
        affiliation: "",
        category: "partner",
        bio: "A collaborative research initiative producing policy analyses and conflict briefings on the Myanmar Civil War and democratic resistance.",
        links: [],
    },
    {
        id: "advocate-ally-project",
        name: "Advocate Ally Project",
        image: "",
        initials: "AA",
        role: "Human Rights Support",
        affiliation: "",
        category: "partner",
        bio: "A program connecting human rights defenders with legal, psychological, and organizational support during and after arbitrary detention.",
        links: [],
    },
    {
        id: "virginia-review-politics",
        name: "The Virginia Review of Politics",
        image: "",
        initials: "VR",
        role: "Academic Journal",
        affiliation: "",
        category: "partner",
        bio: "A student-run academic journal at the University of Virginia focused on political analysis, policy research, and accessible scholarship.",
        links: [],
    },
    {
        id: "cville-tulips",
        name: "Cville Tulips",
        image: "",
        initials: "CT",
        role: "Community Programs",
        affiliation: "",
        category: "partner",
        bio: "A Charlottesville-based initiative supporting literary and well-being programs for over 150 women and children in the local community.",
        links: [],
    },
];

export default function Partners() {
    return (
        <div>
            {/* Hero */}
            <section
                className="relative min-h-[55vh] flex items-center justify-center text-center overflow-hidden bg-(--navy)"
                data-ocid="research.section"
            >
                <img
                    src={partnersheroimage}
                    alt="Research and advocacy"
                    className="absolute inset-0 w-full h-full object-cover opacity-20"
                />
                <div className="noise-overlay absolute inset-0" />
                <div className="relative z-3 py-16 md:py-20 w-full flex flex-col items-center px-6 md:px-12 max-w-[1280px] mx-auto">
                    <div className="t-label mb-3 text-center">Together with Our Partners</div>
                    <OrangeTicker />
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="t-section text-white mb-8 text-center"
                        style={{ fontSize: "clamp(48px,7vw,110px)" }}
                    >
                        OUR PARTNERS
                    </motion.h1>
                    <div className="max-w-3xl text-center">
                        <p style={{ color: "rgba(255,255,255,0.95)", fontFamily: "Lora, serif", fontSize: "18px" }}>
                            The organizations and allies who help make this work possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="bg-white py-24">
                <div className="max-w-[1280px] mx-auto px-6">
                    <AnimatedSection style={{ marginBottom: 48 }}>
                        <div className="t-label mb-3">OUR PARTNERS</div>
                        <OrangeTicker />
                    </AnimatedSection>
                    <div
                        className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        data-ocid="partners.list"
                    >
                        {partners.map((partner, i) => (
                            <AnimatedSection key={partner.id} delay={i * 0.06}>
                                <PersonCard person={partner} />
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}