import api from "../services/api"

const SessionController = {
  async loginHandler(e :React.MouseEvent, email :string, password :string) {
    e.preventDefault()

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