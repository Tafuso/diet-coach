import React, { useState } from "react";
import Styles from './styles.module.scss'
import api from '../../../../services/api'


const Login: React.FC = () => { 

  async function registrationHandler(e :React.MouseEvent) {
    e.preventDefault()

    try {
      await api.post('users', {
        username,
        email,
        password
      })

    } catch (error) { 
      alert(error)
  }
  }

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
      <input 
      
      onChange={e=>setUsername(e.target.value)} 
      type="text" 
      />
      </>
      }
      <span>Email</span>
      <input
      onChange={e=>setEmail(e.target.value)} 
      type="text"
      />
      <span>Senha</span>
      <input 
      onChange={e=>setPassword(e.target.value)} 
      type="password" 
      />
      {hasAccount || <>
      <span>Confirme sua Senha</span>
      <input type="password" />
      </>
      }
      <button 
      onClick={e => registrationHandler(e)}
      >{hasAccount ? "Entrar" : "Criar Conta"}</button>
      <p 
      onClick={e => hasAccount ? setHasAccount(false) : setHasAccount(true)}
      >
        {hasAccount ? <>Não tem uma conta? <b>Crie uma conta.</b></> : <>Já tem uma conta? <b>Faça login.</b></>}
        </p>
    </div>
  )
}

export default Login