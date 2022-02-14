import React from "react";
import Styles from './styles.module.scss'
import editIcon from "../../assets/edit.png"
import deleteIcon from "../../assets/delete.png"
import Meal from "../../interfaces/IMeal";

type Props = {
  Meal: Meal
}
const MealCard: React.FC<Props> = ({Meal}) => { 
  const { type_meals, date, protein, protein_qtd, carbohydrate, carbohydrate_qtd, vegetable, vegetable_qtd } = Meal
  return (
    <div className={Styles.container}>
      <h2>{type_meals}<span> - {date}</span></h2>
      <div className={Styles.food}>
      <div>
        <p>{protein}</p>
        <span>{protein_qtd}</span>
      </div>
      <div>
        <p>{carbohydrate}</p>
        <span>{carbohydrate_qtd}</span>
      </div>
      <div>
        <p>{vegetable}</p>
        <span>{vegetable_qtd}</span>
      </div>
      </div>
      <div className={Styles.icones}>
        <img src={editIcon} alt="icone" />
        <img src={deleteIcon} alt="icone"/>
      </div>
    </div>        
  )
}

export default MealCard