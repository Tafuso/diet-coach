import React, { Dispatch } from "react";
import IMeal from "../../interfaces/IMeal";
import Styles from './styles.module.scss'


interface IProps {
  mealsData: IMeal[]
  setOpenAddModal: Dispatch<React.SetStateAction<boolean>>;
}
const LastCard: React.FC <IProps>= ({mealsData, setOpenAddModal}) => { 
  return (
    <div className={Styles.container}>
        <ul className={Styles.pagination}>
          
          <li>←</li>
          <li className={Styles.active}>1</li>
          <li>2</li>
          <li>...</li>
          <li>3</li>
          <li>→</li>
        </ul>

        <button 
        onClick={e => setOpenAddModal(true)}
        className={Styles.addButton}>+</button>
    </div>        
  )
}

export default LastCard