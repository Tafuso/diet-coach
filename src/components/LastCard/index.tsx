import React, { Dispatch } from "react";
import IMeal from "../../interfaces/IMeal";
import Styles from './styles.module.scss'


interface IProps {
  pagination: number,
  setPagination: Dispatch<React.SetStateAction<number>>,
  mealsData: IMeal[]
  setOpenAddModal: Dispatch<React.SetStateAction<boolean>>;
}
const LastCard: React.FC <IProps>= ({pagination, setPagination, mealsData, setOpenAddModal}) => { 
  return (
    <div className={Styles.container}>
        <ul className={Styles.pagination}>
          
          <li
          onClick={e => {pagination > 0 && setPagination(pagination - 1)}}
          >←</li>
          <li className={Styles.active}>{pagination + 1}</li>
          <li 
          onClick={e => setPagination(pagination + 1)}
          >→</li>
        </ul>

        <button 
        onClick={e => setOpenAddModal(true)}
        className={Styles.addButton}>+</button>
    </div>        
  )
}

export default LastCard