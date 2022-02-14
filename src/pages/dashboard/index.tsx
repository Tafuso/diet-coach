import React, { useContext } from "react";
import LastCard from "../../components/LastCard";
import MealCard from "../../components/MealCard";
import UserContext from "../../context/UserContext";
import Meal from "../../interfaces/IMeal";
import Styles from './styles.module.scss'


const Dashboard: React.FC = () => { 
  const { state: globalState } = useContext(UserContext)

  const MealData : Meal= {
    type_meals: 'Café da Manhã',
    date: '12/08/2002',
    protein: 'Ovo',
    protein_qtd: 100,
    carbohydrate: 'Macarrão',
    carbohydrate_qtd: 100,
    vegetable: 'Abobrinha',
    vegetable_qtd: 400
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2>{`Olá, ${globalState.username}`}</h2>
        <button>Sair</button>
      </div>
      <div className={Styles.menu}>
        <h1>Suas refeições</h1>
        <div className={Styles.filters}>
        <div className={Styles.types}>
          <h3>Filtros:</h3>
          <div>
            <input type="checkbox"/>
            <span>Proteína</span>
          </div>
          <div>
            <input type="checkbox"/>
            <span>Carboidrato</span>
          </div>
          <div>
            <input type="checkbox"/>
            <span>Verdura</span>
          </div>
        </div>
        <div className={Styles.dates}>
          <h3>Período:</h3>
          <input type="date" />
          <p>_</p>
          <input type="date" />
        </div>
        </div>
      </div>
      <MealCard Meal={MealData}/>

    </div>
  )
}

export default Dashboard