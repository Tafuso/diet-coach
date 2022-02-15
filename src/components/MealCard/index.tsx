import React, { Dispatch } from "react";
import Styles from './styles.module.scss'
import editIcon from "../../assets/edit.png"
import deleteIcon from "../../assets/delete.png"
import IMeal from "../../interfaces/IMeal";

type Props = {
  Meal: IMeal,
  setOpenEditModal: Dispatch<React.SetStateAction<number>>,
  setOpenDeleteModal: Dispatch<React.SetStateAction<number>>
}
const MealCard: React.FC<Props> = ({ Meal, setOpenEditModal, setOpenDeleteModal}) => { 
  const { id, type_meals, date, protein, protein_qtd, carbohydrate, carbohydrate_qtd, vegetable, vegetable_qtd } = Meal
  return (
    <div className={Styles.container}>
      <h2>{type_meals}<span> - {new Date (date).toLocaleDateString("pt-BR")}</span></h2>
      <div className={Styles.food}>
      {protein_qtd ?
        <div className={Styles.protein}>
        <p>{protein}</p>
        <span>{protein_qtd}</span>
        </div>
      : null}
      {carbohydrate_qtd ?
        <div className={Styles.carbohydrate}>
          <p>{carbohydrate}</p>
          <span>{carbohydrate_qtd}</span>
        </div>
      : null}
      {vegetable_qtd ? 
        <div className={Styles.vegetable}>
          <p>{vegetable}</p>
          <span>{vegetable_qtd}</span>
        </div>
      : null}
      </div>
      <div className={Styles.icones}>
        <img 
        onClick={e => {setOpenEditModal(id || 0)}}
        src={editIcon} 
        alt="icone" />
        <img
        onClick={e => {setOpenDeleteModal(id || 0)}}
        src={deleteIcon} 
        alt="icone"/>
      </div>
    </div>        
  )
}

export default MealCard