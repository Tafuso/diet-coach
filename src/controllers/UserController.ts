import api from "../services/api"

const UserController = {
  async registrationHandler(e :React.MouseEvent, username :string, email :string, password :string) {
    e.preventDefault()

    try {
      await api.post('users', {
        username,
        email,
        password
      })

      alert('Created')
    } catch (error) { 
      alert(error)
  }
  }
}

export default UserController