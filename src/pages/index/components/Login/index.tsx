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

  //verify if some input is null
  function verifyInputs() {
    if (username == '' || email == '' || password == '' || passwordValid == 'invalid') {
      return true
    } else return false
  }

  //this state says whether it renders login or register
  const [hasAccount, setHasAccount] = useState(true)

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

      //verify if confirm_password ==== password on focus out
      onBlur={e => e.currentTarget.value === password ? setPasswordValid('default') : setPasswordValid('invalid') }
      placeholder="Digite novamente sua senha"
      type="password" />
      </>
      }
      <button 
      onClick=
      {
        //verify if login or register and redirect to controller
        hasAccount ? e=> SessionController.loginHandler(e, email, password) :
        e => UserController.registrationHandler(e, username, email, password)
      }
      >{hasAccount ? "Entrar" : "Criar Conta"}</button>
      <p 
      //set login page or register page
      onClick={e => {
        if (!hasAccount) {
        if (verifyInputs()) setHasAccount(false)
        else return alert("Erro ao criar conta. Tente novamente.")
        else { setHasAccount(true)}, resetInputs()}}
      >
        {hasAccount ? <>Não tem uma conta? <b>Crie uma conta.</b></> : <>Já tem uma conta? <b>Faça login.</b></>}
        </p>
    </div>
  )
}

export default Login