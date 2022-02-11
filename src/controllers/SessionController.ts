import api from "../services/api"

const SessionController = {
  async loginHandler( email :string, password :string) {

    try {
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