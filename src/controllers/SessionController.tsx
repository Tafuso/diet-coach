import api from "../services/api"
import IUsers from "../interfaces/IUser"
import React, { useContext, useEffect } from "react"
import UserContext from "../context/UserContext"
import { useNavigate } from 'react-router-dom'

type Props = {
  email: string,
  password: string
}

const SessionController : React.FC<Props>= ({ email, password }) => {
  
  const { state: globalState,setState: setGlobalState } = useContext(UserContext)
  
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/dashboard')
  }, [globalState.isLogged])

  async function loginHandler() {
    try {      
      const data : IUsers[] =  (await api.get('users')).data 
      const userAlreadyExists = data.find(x => x.email === email)
      
      if (!userAlreadyExists) return alert("Email não encontrado, crie sua conta.")
     
      await api.post('session', {
       email,
       password

      }).then((res) => {

        setGlobalState({ isLogged: true, username: res.data.username, id: res.data.id })
      })

    
    } catch (error) { 
      alert("Erro de autenticação. Tente novamente.")
  }
  }

  loginHandler()

  return(
    null
  )
}



export default SessionController