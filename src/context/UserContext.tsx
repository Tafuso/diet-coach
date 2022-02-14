import React, { createContext, useState } from "react";


type UserType = {
  isLogged: boolean,
  username: string,
  id: number
}

type PropsUserContext = {
  state: UserType,
  setState: React.Dispatch<React.SetStateAction<UserType>>
}

const DEFAULT_VALUE = {
  state: {
    isLogged: false,
    username: '',
    id: 0
  },
  setState: () => {}
}
const UserContext = createContext<PropsUserContext>(DEFAULT_VALUE)


const UserProvider :React.FC = ({children}) => {
  const [state, setState] = useState(DEFAULT_VALUE.state)

  return (
    <UserContext.Provider
     value={{
       state,
       setState,
     }}
     >
      {children}
    </UserContext.Provider>
  )
}

export { UserProvider }
export default UserContext