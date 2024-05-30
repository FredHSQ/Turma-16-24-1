import React, { useState } from 'react';
import styles from './styles.module.css';

function App() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount(count=>count+1);
  }

  return (
    <div className={styles.container}>
      <p>Email</p>
      <input />
      <p>Senha</p>
      <input />
    </div>
  )
}

export default App
