import React from "react";
import Styles from './styles.module.scss'
import editIcon from "../../assets/edit.png"
import deleteIcon from "../../assets/delete.png"

const LastCard: React.FC = () => { 
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

        <button className={Styles.addButton}>+</button>
    </div>        
  )
}

export default LastCard