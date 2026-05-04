import React, { useState } from 'react';

export default function QuizQuestion({ id, question, options, correct, explanation, codeBlock, multiple }) {
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState(null);

  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const correctAnswers = correct.split(',').map(c => c.trim());

  function toggleOption(letter) {
    if (result !== null) return;
    if (multiple) {
      setSelected(prev =>
        prev.includes(letter) ? prev.filter(l => l !== letter) : [...prev, letter]
      );
    } else {
      setSelected([letter]);
    }
    setResult(null);
  }

  function checkAnswer() {
    if (selected.length === 0) return;
    const sortedSelected = [...selected].sort().join(',');
    const sortedCorrect = [...correctAnswers].sort().join(',');
    setResult(sortedSelected === sortedCorrect ? 'correct' : 'incorrect');
  }

  function reset() {
    setSelected([]);
    setResult(null);
  }

  return (
    <div className="quiz-question">
      <p><strong>❓ {question}</strong></p>
      {multiple && <p style={{ fontSize: '0.85em', color: 'var(--ifm-color-primary)' }}>Selecciona todas las que apliquen</p>}

      {codeBlock && <div style={{ margin: '1rem 0' }}>{codeBlock}</div>}

      <ul className="quiz-options">
        {options.map((option, i) => (
          <li key={i}>
            <label>
              <input
                type={multiple ? 'checkbox' : 'radio'}
                name={id}
                value={letters[i]}
                checked={selected.includes(letters[i])}
                onChange={() => toggleOption(letters[i])}
                disabled={result !== null}
              />
              {' '}<strong>{letters[i]}.</strong> <code>{option}</code>
            </label>
          </li>
        ))}
      </ul>

      {result === null ? (
        <button className="quiz-check-btn" onClick={checkAnswer} disabled={selected.length === 0}>
          Verificar respuesta
        </button>
      ) : (
        <button className="quiz-check-btn" onClick={reset} style={{ background: '#6c757d' }}>
          Intentar de nuevo
        </button>
      )}

      {result === 'correct' && (
        <div className="quiz-result correct">
          ✅ <strong>¡Correcto!</strong> {explanation}
        </div>
      )}

      {result === 'incorrect' && (
        <div className="quiz-result incorrect">
          ❌ <strong>Incorrecto.</strong> {explanation}
        </div>
      )}
    </div>
  );
}