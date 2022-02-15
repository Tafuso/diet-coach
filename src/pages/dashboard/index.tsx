import React, { useContext, useEffect, useState } from "react";
import LastCard from "../../components/LastCard";
import MealCard from "../../components/MealCard";
import UserContext from "../../context/UserContext";
import IMeal from "../../interfaces/IMeal";
import api from "../../services/api";
import Styles from './styles.module.scss'
import { useNavigate } from 'react-router-dom'
import ModalAdd from "../../components/ModalAdd";
import ModalEdit from "../../components/ModalEdit";
import DeleteModal from "../../components/ModalDelete";


const Dashboard: React.FC = () => { 
  const { state: globalState, setState: setGlobalState } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    !globalState.isLogged && navigate('/')
  }, [globalState])

  const [mealsData, setMealsData] = useState<IMeal[]>([])

  useEffect (() => {
    getMealsByUser()
  }, [mealsData])

  async function getMealsByUser() {
    const userMealsData : IMeal[]=  (await api.get(`${globalState.id}/meals/${pagination}`, {
      headers: {
        auth: globalState.id
      }
    })).data

    setMealsData(userMealsData)
  }    

  const [openAddModal, setOpenAddModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(0)
  const [openDeleteModal, setOpenDeleteModal] = useState(0)
  const [pagination, setPagination] = useState(0)


  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h2>{`Olá, ${globalState.username}`}</h2>
        <button
        onClick={e => setGlobalState({ isLogged: false, username: '', id: 0 })}
        >Sair</button>
      </div>
      <div className={Styles.menu}>
        <h1>Suas refeições</h1>
        <div className={Styles.filters}>
        <div className={Styles.types}>
          <h3>Filtros:</h3>
          <div className={Styles.protein}>
            <input type="checkbox"/>
            <span>Proteína</span>
          </div>
          <div className={Styles.carbohydrate}>
            <input type="checkbox"/>
            <span>Carboidrato</span>
          </div>
          <div className={Styles.vegetable}>
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
      {mealsData.map(meal => (       
        <MealCard 
        key={meal.id} 
        Meal={meal} 
        setOpenEditModal={setOpenEditModal}
        setOpenDeleteModal={setOpenDeleteModal}/>
      ))}
      <LastCard  
      mealsData={mealsData} 
      pagination={pagination}
      setPagination={setPagination}
      setOpenAddModal={setOpenAddModal}/>
      {openAddModal && <ModalAdd setOpenAddModal={setOpenAddModal}/>}
      {openEditModal !== 0 && <ModalEdit
        openEditModal={openEditModal}
        setOpenEditModal={setOpenEditModal} />}
      {openDeleteModal !== 0 && <DeleteModal
      openDeleteModal={openDeleteModal}
      setOpenDeleteModal={setOpenDeleteModal} />}
    </div>
  )
}

export default Dashboard