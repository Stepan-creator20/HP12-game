import { useState } from "react";

const truths = [
  "Ты когда-нибудь флиртовал(а) с преподавателем?",
  "Какой самый странный фетиш у тебя был?"
];

const dares = [
  "Сделай эротичный танец 30 секунд.",
  "Поцелуй соседа слева в щеку."
];

function shuffleArray(array) {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function App() {
  const [truthList] = useState(() => shuffleArray(truths));
  const [dareList] = useState(() => shuffleArray(dares));
  const [usedTruths, setUsedTruths] = useState(0);
  const [usedDares, setUsedDares] = useState(0);
  const [current, setCurrent] = useState(null);

  const getTruth = () => {
    if (usedTruths < truthList.length) {
      setCurrent({ type: "truth", text: truthList[usedTruths] });
      setUsedTruths((prev) => prev + 1);
    } else {
      setCurrent({ type: "truth", text: "Все вопросы заданы! Перезагрузите игру." });
    }
  };

  const getDare = () => {
    if (usedDares < dareList.length) {
      setCurrent({ type: "dare", text: dareList[usedDares] });
      setUsedDares((prev) => prev + 1);
    } else {
      setCurrent({ type: "dare", text: "Все действия выполнены! Перезагрузите игру." });
    }
  };

  return (
    <div style={{
      fontFamily: 'sans-serif',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff0f4',
      padding: '2rem'
    }}>
      <h1 style={{ color: '#c026d3' }}>Правда или Действие 18+</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <button onClick={getTruth} style={buttonStyle}>Правда</button>
        <button onClick={getDare} style={buttonStyle}>Действие</button>
      </div>
      {current && (
        <div style={{
          backgroundColor: 'white',
          padding: '2rem',
          marginTop: '2rem',
          borderRadius: '10px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          maxWidth: '600px',
          textAlign: 'center'
        }}>
          <span style={{ color: current.type === 'truth' ? '#9333ea' : '#dc2626' }}>{current.text}</span>
        </div>
      )}
    </div>
  );
}

const buttonStyle = {
  padding: '1rem 2rem',
  border: 'none',
  borderRadius: '10px',
  backgroundColor: '#ec4899',
  color: 'white',
  fontSize: '1.2rem',
  cursor: 'pointer'
};
