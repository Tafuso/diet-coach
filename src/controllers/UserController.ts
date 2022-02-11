import api from "../services/api"
import IUsers from "../interfaces/IUser"

const UserController = {
  async registrationHandler( username :string, email :string, password :string) {

    try {
      const data : IUsers[] = await (await api.get('users')).data

      const userAlreadyExists = data.find(x => x.email === email)

      if (userAlreadyExists) return alert("Email já cadastrado.")

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