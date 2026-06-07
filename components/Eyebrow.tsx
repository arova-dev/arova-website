// The small "01 · Who we are" label above each inner-page title, with a
// hairline rule filling the rest of the row (drawn by CSS ::after).
type Props = {
  num: string; // the mono number, e.g. "01"
  label: string; // the page name, e.g. "Who we are"
};

export default function Eyebrow({ num, label }: Props) {
  return (
    <div className="eyebrow anim d1">
      {num} <span className="lbl">{label}</span>
    </div>
  );
}
