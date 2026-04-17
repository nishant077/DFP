import React, { useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, wrap } from 'motion/react';

// Import sample images for the gallery (Row 1)
import img1 from '../assets/gallery/gallery1.png';
import img2 from '../assets/gallery/gallery2.png';
import img3 from '../assets/gallery/gallery3.png';
import img4 from '../assets/gallery/gallery4.jpeg';
import img5 from '../assets/gallery/gallery5.png';
import img6 from '../assets/gallery/gallery6.png';
import img7 from '../assets/gallery/gallery7.png';
import img8 from '../assets/gallery/gallery8.png';

// Import sample images for the gallery (Row 2)


import img9 from '../assets/gallery/gallery9.png';
import img10 from '../assets/gallery/gallery10.png';
import img11 from '../assets/gallery/gallery11.png';
import img12 from '../assets/gallery/gallery12.png';
import img13 from '../assets/gallery/gallery13.png';
import img14 from '../assets/gallery/gallery14.png';
import img15 from '../assets/gallery/gallery15.png';
import img16 from '../assets/gallery/gallery16.png';


const row1Images = [
    { src: img1, alt: "Burmese", type: "landscape" },
    { src: img2, alt: "Civil Society", type: "portrait" },
    { src: img3, alt: "Counter Autocracy", type: "landscape" },
    { src: img4, alt: "Crypto Currency", type: "landscape" },
    { src: img5, alt: "Diakonia", type: "portrait" },
    { src: img6, alt: "Freedom Studio", type: "landscape" },
    { src: img7, alt: "End Arbitrary", type: "portrait" },
    { src: img8, alt: "Gene", type: "landscape" },
];

const row2Images = [
    { src: img9, alt: "Khmer", type: "portrait" },
    { src: img10, alt: "Nehemiah Project", type: "landscape" },
    { src: img11, alt: "Opposition", type: "landscape" },
    { src: img12, alt: "Rios de Pie", type: "portrait" },
    { src: img13, alt: "gallery 13", type: "landscape" },
    { src: img14, alt: "gallery 14", type: "portrait" },
    { src: img15, alt: "gallery 15", type: "portrait" },
    { src: img16, alt: "gallery 16", type: "landscape" },
];

// Marquee Row component for ultra smooth scrolling via Framer Motion
function MarqueeRow({ images, baseVelocity = -1.5 }) {
    const baseX = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const trackRef = useRef(null);
    const pixelWidthRef = useRef(0);

    // Measure after mount AND after a short delay to let any images settle.
    // Using fixed image widths makes this reliable regardless of lazy loading.
    React.useEffect(() => {
        const measure = () => {
            if (trackRef.current && trackRef.current.scrollWidth > 0) {
                pixelWidthRef.current = trackRef.current.scrollWidth / 3;
            }
        };
        measure();
        // Re-check after a short delay for any late-loading images
        const id = setTimeout(measure, 300);
        return () => clearTimeout(id);
    }, [images]);

    // Animate: move left each frame, wrap by the exact width of one image set
    useAnimationFrame((t, delta) => {
        if (isHovered) return;
        // Lazily re-measure if still 0
        if (pixelWidthRef.current === 0 && trackRef.current) {
            pixelWidthRef.current = trackRef.current.scrollWidth / 3;
        }
        if (pixelWidthRef.current === 0) return;

        const moveBy = baseVelocity * (delta / 1000);
        const next = baseX.get() + moveBy;
        baseX.set(wrap(-pixelWidthRef.current, 0, next));
    });

    const duplicatedImages = [...images, ...images, ...images];

    return (
        <div className="w-full relative overflow-hidden flex items-center py-2">
            <motion.div
                ref={trackRef}
                style={{
                    x: baseX,
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                }}
                className="flex w-max"
            >
                {duplicatedImages.map((img, index) => (
                    <motion.div
                        key={`gallery-img-${index}`}
                        className="shrink-0 mr-6 md:mr-10 relative"
                        style={{
                            width: img.type === "portrait" ? "180px" : "280px",
                            height: img.type === "portrait" ? "260px" : "180px",
                            y: index % 2 === 0 ? -15 : 15,
                            backfaceVisibility: "hidden",
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover grayscale transition-[filter] duration-300 ease-in-out hover:grayscale-0 cursor-pointer shadow-xl rounded-sm"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}

export default function GallerySection() {
    return (
        <section className="bg-(--navy-deep) overflow-hidden py-16 md:py-24">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-12">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-12">
                    <div className="orange-rule">
                        <h2 className="t-section text-white m-0">IN THE FIELD</h2>
                    </div>
                    <div className="md:max-w-md text-right md:-mt-2">
                        <p className="t-quote text-(--fog) m-0 leading-tight" style={{ fontSize: '18px' }}>
                            Research, advocacy, and solidarity —<br />
                            documented across borders.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 md:gap-8">
                {/* Row 1 loops a bit faster */}
                <MarqueeRow images={row1Images} baseVelocity={-120} />

                {/* Row 2 loops a bit slower, giving a parallax feel */}
                <MarqueeRow images={row2Images} baseVelocity={-100} />
            </div>
        </section>
    );
}
