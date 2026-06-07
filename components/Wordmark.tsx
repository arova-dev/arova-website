// The Arova wordmark lockup: white "Arova" with a cyan full stop.
// The full stop IS the logo — always rendered as live text, never an image.
// `className` lets each placement (top bar, footer) apply its own size.
type Props = {
  className?: string;
};

export default function Wordmark({ className }: Props) {
  return (
    <span className={className}>
      Arova<span className="stop">.</span>
    </span>
  );
}
