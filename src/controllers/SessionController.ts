import api from "../services/api"
import IUsers from "../interfaces/IUser"

const SessionController = {
  async loginHandler( email :string, password :string) {

    try {
      const data : IUsers[] = await (await api.get('users')).data

      const userAlreadyExists = data.find(x => x.email === email)

      if (!userAlreadyExists) return alert("Email não encontrado, crie sua conta.")

      await api.post('session', {
        email,
        password
      })
      alert('Loged')
    } catch (error) { 
      alert("Erro de autenticação. Tente novamente.")
  }
  }
}

export default SessionController