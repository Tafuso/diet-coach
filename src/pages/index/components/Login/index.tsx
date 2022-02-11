import React, { useState } from "react";
import Styles from './styles.module.scss'
import UserController from "../../../../controllers/UserController";
import SessionController from "../../../../controllers/SessionController";


const Login: React.FC = () => { 

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  //reset after change page
  function resetInputs() {setUsername(''), setEmail(''), setPassword('')}

  //verify if some input is null and register user
  function verifyAndRegister() {
    if (username === '' || email === '' || password === '' || passwordValid === 'invalid') {
      return alert("Por favor, preencha todos os campos corretamente.")
    } else {
      UserController.registrationHandler( username, email, password)
    }
  }

  //this state says whether it renders login or register
  const [hasAccount, setHasAccount] = useState(true)

  //states verify inputs when focus out
  const [passwordValid, setPasswordValid] = useState('default')
  const [isUsernameNull, setIsUsernameNull] = useState('default')
  const [isEmailNull, setIsEmailNull] = useState('default')
  const [isPasswordNull, setIsPasswordNull] = useState('default')

  return (
    <div className={Styles.container}>
      <div className={Styles.title}>
        {/* verify if user hasAccount and set title and welcome message */}
        <h1>{hasAccount ? "Entrar" : "Criar Conta"}</h1>
        <h2>{hasAccount ? "Bem-vindo(a) ao seu nutricionista pessoal" : "Comece agora com seu nutricionista pessoal"}</h2>
      </div>
      {hasAccount || <>
      <span>Nome</span>
      <input 
      className={Styles[isUsernameNull]}
      onBlur={e => e.currentTarget.value !== "" ? setIsUsernameNull('default') : setIsUsernameNull('invalid') }
      placeholder="Digite seu nome completo"
      onChange={e=>setUsername(e.target.value)} 
      value={username}
      type="text" 
      />
      </>
      }
      <span>Email</span>
      <input
      className={Styles[isEmailNull]}
      onBlur={e => e.currentTarget.value !== "" ? setIsEmailNull('default') : setIsEmailNull('invalid') }
      placeholder="Ex: meuemail@gmail.com"
      onChange={e=>setEmail(e.target.value)}
      value={email}
      type="text"
      />
      <span>Senha</span>
      <input 
      className={Styles[isPasswordNull]}
      onBlur={e => e.currentTarget.value !== "" ? setIsPasswordNull('default') : setIsPasswordNull('invalid') }
      placeholder="Ex: 12334"
      onChange={e=>setPassword(e.target.value)} 
      value={password}
      type="password" 
      />
      {hasAccount || <>
      <span>Confirme sua Senha</span>
      <input 
      className={Styles[passwordValid]}
      onBlur={e => e.currentTarget.value === password ? setPasswordValid('default') : setPasswordValid('invalid') }
      placeholder="Digite novamente sua senha"
      type="password" />
      </>
      }
      <button 
      onClick={e => {hasAccount ?  SessionController.loginHandler(email, password) : verifyAndRegister()}}
      >{hasAccount ? "Entrar" : "Criar Conta"}</button>
      <p 
      //set login page or register page
      onClick={e => {hasAccount ? setHasAccount(false) : setHasAccount(true), resetInputs()}}
      >
        {hasAccount ? <>Não tem uma conta? <b>Crie uma conta.</b></> : <>Já tem uma conta? <b>Faça login.</b></>}
        </p>
    </div>
  )
}

export default Login