import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import Styles from './styles.module.scss'

const Dashboard: React.FC = () => { 
  const { state: globalState } = useContext(UserContext)

  return (
    <div className={Styles.container}>
      {`Olá, ${globalState.username}`}
    </div>
  )
}

export default Dashboard