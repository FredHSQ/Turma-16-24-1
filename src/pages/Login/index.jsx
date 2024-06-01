import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { Input } from '../../components/Input';
import { functions } from '../../functions/addCount';

function Login() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function addCount() {
    setCount(count => count + 1);
  }

  useEffect(() => {
    setEmail("fred" + count);
  }, [count, password]);

  return (
    <div className={styles.container}>
      <Input onChange={e => setEmail(e.target.value)} title='Email' />
      <Input onChange={e => setPassword(e.target.value)} title={'Senha'} placeholder='****' />
      <button onClick={functions.addCount}>
        Atualiza contagem
      </button>
    </div>
  )
}

export default Login
