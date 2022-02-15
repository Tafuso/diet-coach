import React, { Dispatch } from "react";
import Styles from './styles.module.scss'
import editIcon from "../../assets/edit.png"
import deleteIcon from "../../assets/delete.png"
import IMeal from "../../interfaces/IMeal";

type Props = {
  Meal: IMeal
  setOpenEditModal: Dispatch<React.SetStateAction<boolean>>;
  setMealToActions: Dispatch<React.SetStateAction<number>>
}
const MealCard: React.FC<Props> = ({ Meal, setOpenEditModal, setMealToActions}) => { 
  const { type_meals, date, protein, protein_qtd, carbohydrate, carbohydrate_qtd, vegetable, vegetable_qtd } = Meal
  return (
    <div className={Styles.container}>
      <h2>{type_meals}<span> - {new Date (date).toLocaleDateString("pt-BR")}</span></h2>
      <div className={Styles.food}>
      {protein &&
        <div className={Styles.protein}>
        <p>{protein}</p>
        <span>{protein_qtd}</span>
        </div>
        }
      {carbohydrate && 
        <div className={Styles.carbohydrate}>
          <p>{carbohydrate}</p>
          <span>{carbohydrate_qtd}</span>
        </div>
      }
      {vegetable &&
        <div className={Styles.vegetable}>
          <p>{vegetable}</p>
          <span>{vegetable_qtd}</span>
        </div>
      }
      </div>
      <div className={Styles.icones}>
        <img 
        onClick={e => {setOpenEditModal(true)}}
        src={editIcon} 
        alt="icone" />
        <img src={deleteIcon} alt="icone"/>
      </div>
    </div>        
  )
}

export default MealCard