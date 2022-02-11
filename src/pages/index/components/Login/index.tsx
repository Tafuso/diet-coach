import React from "react";
import Styles from './styles.module.scss'


const Login: React.FC = () => { 
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h1>Entrar</h1>
        <h2>Bem-vindo(a) ao seu nutricionista pessoal</h2>
      </div>
      <span>Email</span>
      <input type="text" />
      <span>Senha</span>
      <input type="password" />
      <button>Entrar</button>
      <a href="#">Não tem uma conta? <b>Crie uma conta.</b></a>

    </div>
  )
}

export default Login