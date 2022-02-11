import React from "react";
import Styles from './styles.module.scss'


const Register: React.FC = () => { 
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h1>Criar Conta</h1>
        <h2>Comece agora com seu nutricionista pessoal</h2>
      </div>
      <span>Email</span>
      <input type="text" />
      <span>Senha</span>
      <input type="password" />
      <button>Criar Conta</button>
      <a href="#">Não tem uma conta? <b>Crie uma conta.</b></a>

    </div>
  )
}

export default Register