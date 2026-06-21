export default function ProgressBar({ value, max, color = '#58CC02' }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="progress-bar-track" role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div
        className="progress-bar-fill"
        style={{ width: `${pct}%`, background: color }}
      />
    </div>
  );
}
