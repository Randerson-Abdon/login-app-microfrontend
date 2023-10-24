import { useState } from 'react';
import AuthenticateUser from '../../useCases/authenticateUser';
import AuthAPIAdapter from '../../adapters/AuthAPIAdapter';
import User from "../../entities/User";
import styles from './styles.module.css';

interface LoginPageProps {
  onLoginSuccess: (user: User) => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authAdapter = new AuthAPIAdapter();
  const authenticateUser = new AuthenticateUser(authAdapter);

  const handleLogin = async () => {
    const user: User | null = await authenticateUser.execute(email, password);
    if (user) {
      console.log("Usuário autenticado:", user);
      onLoginSuccess(user);  // Chama a prop de callback com o usuário
    } else {
      console.log("Falha na autenticação");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.formGroup}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formGroup}>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.inputField}
        />
      </div>
      <div className={styles.formGroup}>
        <button onClick={handleLogin} className={styles.loginButton}>Entrar</button>
      </div>
    </div>
  );
}