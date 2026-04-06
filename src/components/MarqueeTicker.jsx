const content =
    "RESEARCH IN SERVICE OF DEMOCRATIC STRUGGLE · UNIVERSITY OF VIRGINIA · 50+ NATIONS · 25+ YEARS · GLOBAL SOLIDARITY STRENGTHENS LOCAL RESISTANCE · ";

export default function MarqueeTicker() {
    return (
        <div
            className="bg-[var(--orange)] h-14 overflow-hidden flex items-center"
            aria-hidden="true"
        >
            <div className="marquee-track">
                {[0, 1].map((i) => (
                    <span
                        key={i}
                        className="font-bold text-white uppercase whitespace-nowrap pr-10 tracking-[2px] text-[15px]"
                        style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                    >
                        {content}
                    </span>
                ))}
            </div>
        </div>
    );
}
