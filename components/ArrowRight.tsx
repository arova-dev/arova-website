// The single icon used across the site: Lucide "arrow-right".
// Inline SVG (no icon font), 1.75px stroke, rounded joins — per the brand.
type Props = {
  size?: number;
};

export default function ArrowRight({ size = 22 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
