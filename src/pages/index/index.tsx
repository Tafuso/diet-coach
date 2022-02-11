import React from "react";
import Styles from './styles.module.scss'
import bgImg from '../../assets/img-index-page.png'
import Login from "./components/Login";

const Index: React.FC = () => { 
  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
        <Login />
        <div className={Styles.illustration}>
          <img src={bgImg} alt="Imagem ilustrativa" />
        </div>
      </div>
    </div>
  )
}

export default Index