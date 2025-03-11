'use client'
import { useEffect } from 'react'
import { A } from '../link/link'
import './sidebar.css'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const { isOpen } = useSelector(state => state.sidebar)

  return (
    <aside className={`sidebar sidebar-${isOpen? 'open':'close'}`}>
      <ul className="sidebar-list">
        <h2 className="sidebar-list-title">Поди</h2>
        <li className="sidebar-list-item"><A href='#' text='Voparesso' /></li>
        <li className="sidebar-list-item"><A href='#' text='Voopoo' /></li>
        <li className="sidebar-list-item"><A href='#' text='Smoke' /></li>
        <li className="sidebar-list-item"><A href='#' text='Lost Vape' /></li>
        <li className="sidebar-list-item"><A href='#' text='Xlim' /></li>
        <li className="sidebar-list-item"><A href='#' text='Sourin' /></li>
      </ul>
      <ul className="sidebar-list">
        <h2 className="sidebar-list-title">Кардриджі</h2>
        <li className="sidebar-list-item"><A href='#' text='Voparesso' /></li>
        <li className="sidebar-list-item"><A href='#' text='Voopoo' /></li>
        <li className="sidebar-list-item"><A href='#' text='Smoke' /></li>
        <li className="sidebar-list-item"><A href='#' text='Lost Vape' /></li>
        <li className="sidebar-list-item"><A href='#' text='Xlim' /></li>
        <li className="sidebar-list-item"><A href='#' text='Sourin' /></li>
      </ul>
      <ul className="sidebar-list">
        <h2 className="sidebar-list-title">Запривки</h2>
        <li className="sidebar-list-item"><A href='#' text='FL 350' /></li>
        <li className="sidebar-list-item"><A href='#' text='M-Cake' /></li>
        <li className="sidebar-list-item"><A href='#' text='M-Jam' /></li>
        <li className="sidebar-list-item"><A href='#' text='PE 1000' /></li>
        <li className="sidebar-list-item"><A href='#' text='Aroma Max' /></li>
        <li className="sidebar-list-item"><A href='#' text='Puff' /></li>
        <li className="sidebar-list-item"><A href='#' text='P1' /></li>
        <li className="sidebar-list-item"><A href='#' text='Chaser' /></li>
      </ul>
    </aside>
  )
}

export default Sidebar
