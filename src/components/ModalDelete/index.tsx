import React, { Dispatch, useEffect, useState } from "react";
import IMeal from "../../interfaces/IMeal";
import api from "../../services/api";
import Styles from './styles.module.scss'

interface IProps {
  openDeleteModal: number
  setOpenDeleteModal: Dispatch<React.SetStateAction<number>>;
}

const DeleteModal: React.FC <IProps>= ({openDeleteModal, setOpenDeleteModal}) => { 

  const deleteModal = async () => {
    await api.delete(`/meals/${openDeleteModal}`)
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.box}>
        <h2>Deletar essa refeição?</h2>
        <div>
          <button
          className={Styles.back}
          onClick={e => {setOpenDeleteModal(0)}}>Voltar</button>
          <button
          className={Styles.delete}
          onClick={e => {deleteModal(), setOpenDeleteModal(0)}}>Deletar</button>
        </div>
      </div>
    </div>        
  )
}

export default DeleteModal