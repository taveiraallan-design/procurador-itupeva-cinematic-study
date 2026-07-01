export default function Card({ children, className = '', variant = 'default' }) {
  return <section className={`card card-${variant} ${className}`}>{children}</section>;
}
