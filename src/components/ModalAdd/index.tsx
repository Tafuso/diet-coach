import React, { Dispatch, useState } from "react";
import IMeal from "../../interfaces/IMeal";
import api from "../../services/api";
import Styles from './styles.module.scss'

interface IProps {
  setOpenAddModal: Dispatch<React.SetStateAction<boolean>>;
}

const ModalAdd: React.FC <IProps>= ({setOpenAddModal}) => { 

  const [type_meals, setType_meals] = useState('Café da Manhã')
  const [date, setDate] = useState((new Date).toLocaleDateString())
  const [protein, setProtein] = useState('')
  const [protein_qtd, setProtein_qtd] = useState(0)
  const [carbohydrate, setCarbohydrate] = useState('')
  const [carbohydrate_qtd, setCarbohydrate_qtd] = useState(0)
  const [vegetable, setVegetable] = useState('')
  const [vegetable_qtd, setVegetable_qtd] = useState(0)

  const Meal :IMeal = {
    type_meals,
    date,
    protein,
    protein_qtd,
    carbohydrate,
    carbohydrate_qtd,
    vegetable,
    vegetable_qtd
  }

  const handlerAddMeal = () => {
    if (protein === '' && carbohydrate === '' && vegetable === '') {
      return alert('Preencha pelo menos um alimento, por favor.')
    } else if (
      (protein !== '' && protein_qtd === 0) ||
      (carbohydrate !== '' && carbohydrate_qtd === 0) || 
      (vegetable !== '' && vegetable_qtd === 0)
      ) {
        return alert('Preencha a quantidade de gramas, por favor.')
      } else {
        const registerMeal = async () => {
          await api.post(`/1/meals`, Meal)
        }

        registerMeal().finally(() => setOpenAddModal(false))
      }
  }

  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
        <h2>Nova Refeição</h2>
        <button 
        onClick={e => setOpenAddModal(false)}
        className={Styles.closeBtn}>X</button>
        <div className={Styles.firstLine}>
          <div>
            <span>Qual refeição deseja adicionar?</span>
            <select 
            name="type_meals" 
            size={1}
            onChange={e => setType_meals(e.currentTarget.value)}
            >  
              <option value="Café da Manhã" selected>Café da Manhã</option>  
              <option value="Almoço">Almoço</option>  
              <option value="Café da Tarde">Café da Tarde</option>  
              <option value="Janta">Janta</option>  
              <option value="Ceia">Ceia</option>  
            </select>    
          </div>
          <div>
            <span>Data da refeição?</span>
            <input 
              type="text"
              name="date"
              maxLength={10}
              placeholder="dd/mm/yyyy"
              onKeyUp={e => {var v = e.currentTarget.value;
                  if (v.match(/^\d{2}$/) !== null) {
                      e.currentTarget.value = v + '/';
                  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
                      e.currentTarget.value = v + '/';
                  }}}
              onChange={e => setDate(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className={Styles.secondLine}>
          <span>Quais são os alimentos? E a quantidade?</span>
          <div>
            <span className={Styles.protein}>Proteína</span>
            <select 
            defaultValue={''}
            name="protein" 
            size={1}
            onChange={e => setProtein(e.currentTarget.value) }
            >  
              <option value=' ' selected></option>
              <option value="Peixe">Peixe</option>  
              <option value="Boi">Boi</option>  
              <option value="Porco">Porco</option>  
              <option value="Frango">Frango</option>  
              <option value="Ovo">Ovo</option>  
            </select>   
            <p>-</p>
            <input  
            className={Styles.number}
            maxLength={4} 
            type="text" 
            onChange={e => {e.target.value = e.target.value.replaceAll(/[^0-9]/g,''), setProtein_qtd(parseInt(e.currentTarget.value))}}
            
            min={0}/>
            <b>g</b>
          </div>
          <div>
            <span className={Styles.carbohydrate}>Carboidrato</span>
            <select 
            defaultValue={''}
            name="carbohydrate" 
            size={1}
            onChange={e => setCarbohydrate(e.currentTarget.value)}
            >  
              <option value=' ' selected></option>            
              <option value="Arroz">Arroz</option>  
              <option value="Batata">Batata</option>  
              <option value="Inhame">Inhame</option>  
              <option value="Macarrão">Macarrão</option>  
              <option value="Pão">Pão</option>  
            </select>  
            <p>-</p>
            <input  
            className={Styles.number}
            maxLength={4} 
            type="text" 
            onChange={e => {e.target.value = e.currentTarget.value.replaceAll(/[^0-9]/g,''), setCarbohydrate_qtd(parseInt(e.currentTarget.value))}}
            min={0}/>
            <b>g</b>
          </div>
          <div>
            <span className={Styles.vegetable}>Verdura</span>
            <select 
            defaultValue={''}
            name="vegetable" 
            size={1}
            onChange={e => setVegetable(e.currentTarget.value)}
            >  
            <option value=' ' selected></option>
              <option value="Abobrinha">Abobrinha</option>  
              <option value="Berinjela">Berinjela</option>  
              <option value="Abóbora">Abóbora</option>  
              <option value="Almeirão">Almeirão</option>  
              <option value="Tomate">Tomate</option>  
            </select>  
            <p>-</p>
            <input  
            className={Styles.number}
            maxLength={4} 
            type="text" 
            onChange={e => {e.target.value = e.currentTarget.value.replaceAll(/[^0-9]/g,''), setVegetable_qtd(parseInt(e.currentTarget.value))}}
            min={0}/>
            <b>g</b>
          </div>
        </div>
        <button
        onClick={e => {handlerAddMeal()}}>Pronto</button>
      </div>
    </div>        
  )
}

export default ModalAdd