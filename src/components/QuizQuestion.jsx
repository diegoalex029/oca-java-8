import React, { useState } from 'react';

/**
 * @param {Object} props
 * @param {string} props.id - ID único de la pregunta (ej: "q1")
 * @param {string} props.question - Texto de la pregunta
 * @param {string[]} props.options - Array de opciones
 * @param {string} props.correct - Letra correcta: "A", "B", "C" o "D"
 * @param {string} props.explanation - Explicación al verificar
 * @param {React.ReactNode} [props.codeBlock] - Código opcional
 */
export default function QuizQuestion({ id, question, options, correct, explanation, codeBlock }) {
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const letters = ['A', 'B', 'C', 'D'];

  function checkAnswer() {
    if (!selected) return;
    setResult(selected === correct ? 'correct' : 'incorrect');
  }

  function reset() {
    setSelected(null);
    setResult(null);
  }

  return (
    <div className="quiz-question">
      <p><strong>❓ {question}</strong></p>

      {codeBlock && <div style={{ margin: '1rem 0' }}>{codeBlock}</div>}

      <ul className="quiz-options">
        {options.map((option, i) => (
          <li key={i}>
            <label>
              <input
                type="radio"
                name={id}
                value={letters[i]}
                checked={selected === letters[i]}
                onChange={() => { setSelected(letters[i]); setResult(null); }}
                disabled={result !== null}
              />
              {' '}<strong>{letters[i]}.</strong> <code>{option}</code>
            </label>
          </li>
        ))}
      </ul>

      {result === null ? (
        <button className="quiz-check-btn" onClick={checkAnswer} disabled={!selected}>
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