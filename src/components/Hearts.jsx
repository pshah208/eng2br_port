export default function Hearts({ count }) {
  return (
    <div className="hearts" aria-label={`${count} hearts remaining`}>
      {[0, 1, 2].map((i) => (
        <span key={i} className={`heart${i < count ? '' : ' heart--lost'}`}>
          ❤️
        </span>
      ))}
    </div>
  );
}
