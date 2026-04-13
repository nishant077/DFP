const content =
    "RESEARCH IN SERVICE OF DEMOCRATIC STRUGGLE · UNIVERSITY OF VIRGINIA · 22 NATIONS · 6 YEARS · GLOBAL SOLIDARITY STRENGTHENS LOCAL RESISTANCE · ";

export default function MarqueeTicker() {
    return (
        <div
            className="bg-[var(--orange)] h-14 overflow-hidden flex items-center"
            aria-hidden="true"
            style={{ width: "100%" }}
        >
            <div className="marquee-track flex w-max">
                {[0, 1].map((i) => (
                    <div key={i} className="flex shrink-0">
                        {[0, 1, 2, 3].map((j) => (
                            <span
                                key={j}
                                className="font-bold text-white uppercase whitespace-nowrap pr-2 tracking-[2px] text-[15px]"
                                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                            >
                                {content}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
