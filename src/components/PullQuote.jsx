export default function PullQuote({ children, className = "", style }) {
    return (
        <blockquote
            className={`orange-rule t-quote ${className}`}
            style={{ margin: 0, ...style }}
        >
            {children}
        </blockquote>
    );
}
