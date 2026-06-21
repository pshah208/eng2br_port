import { useState, useMemo } from 'react';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchingPairs({ exercise, onAnswer }) {
  const pairs = exercise.pairs;
  const shuffledPT = useMemo(() => shuffle(pairs.map((p) => p.pt)), [pairs]);

  const [selectedEN, setSelectedEN] = useState(null);
  const [selectedPT, setSelectedPT] = useState(null);
  const [matched, setMatched] = useState([]);   // array of en keys that are matched
  const [wrong, setWrong] = useState(null);      // en key that was wrong

  const handleEN = (en) => {
    if (matched.includes(en)) return;
    setSelectedEN(en);
    setSelectedPT(null);
  };

  const handlePT = (pt) => {
    if (!selectedEN) return;
    const correctPT = pairs.find((p) => p.en === selectedEN)?.pt;
    if (pt === correctPT) {
      const newMatched = [...matched, selectedEN];
      setMatched(newMatched);
      setSelectedEN(null);
      setSelectedPT(null);
      if (newMatched.length === pairs.length) {
        setTimeout(() => onAnswer(true), 600);
      }
    } else {
      setWrong(selectedEN);
      setSelectedPT(pt);
      setTimeout(() => {
        setWrong(null);
        setSelectedEN(null);
        setSelectedPT(null);
      }, 700);
    }
  };

  const ptMatched = (pt) => {
    const match = pairs.find((p) => p.pt === pt);
    return match ? matched.includes(match.en) : false;
  };

  return (
    <div className="exercise-card">
      <p className="exercise-label">🔗 Match the pairs</p>
      <h2 className="exercise-question" style={{ fontSize: '1rem' }}>
        Match each English word with its Portuguese translation
      </h2>

      <div className="matching-grid">
        <div className="matching-col">
          {pairs.map((p) => {
            let cls = 'match-tile match-tile--en';
            if (matched.includes(p.en)) cls += ' matched';
            else if (selectedEN === p.en) cls += wrong === p.en ? ' wrong' : ' selected';
            return (
              <button
                key={p.en}
                className={cls}
                onClick={() => handleEN(p.en)}
                disabled={matched.includes(p.en)}
              >
                {p.en}
              </button>
            );
          })}
        </div>
        <div className="matching-col">
          {shuffledPT.map((pt) => {
            let cls = 'match-tile match-tile--pt';
            if (ptMatched(pt)) cls += ' matched';
            else if (selectedPT === pt) cls += ' wrong';
            return (
              <button
                key={pt}
                className={cls}
                onClick={() => handlePT(pt)}
                disabled={ptMatched(pt)}
              >
                {pt}
              </button>
            );
          })}
        </div>
      </div>

      <p className="exercise-hint">
        {matched.length} / {pairs.length} matched
      </p>
    </div>
  );
}
