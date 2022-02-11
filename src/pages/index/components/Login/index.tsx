import React, { useState } from "react";
import Styles from './styles.module.scss'


const Login: React.FC = () => { 
  const [hasAccount, setHasAccount] = useState(false)
  //this state says whether it renders login or register
  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        <h1>{hasAccount ? "Entrar" : "Criar Conta"}</h1>
        <h2>{hasAccount ? "Bem-vindo(a) ao seu nutricionista pessoal" : "Comece agora com seu nutricionista pessoal"}</h2>
      </div>
      {hasAccount || <>
      <span>Nome</span>
      <input type="text" />
      </>
      }
      <span>Email</span>
      <input type="text" />
      <span>Senha</span>
      <input type="password" />
      {hasAccount || <>
      <span>Confirme sua Senha</span>
      <input type="password" />
      </>
      }
      <button>{hasAccount ? "Entrar" : "Criar Conta"}</button>
      <p 
      onClick={e => hasAccount ? setHasAccount(false) : setHasAccount(true)}
      >
        {hasAccount ? <>Não tem uma conta? <b>Crie uma conta.</b></> : <>Já tem uma conta? <b>Faça login.</b></>}
        </p>

    </div>
  )
}

export default Login