'use client'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '@/store/store'
import './alert.css'

const Alert = () => {
  const { type, text } = useSelector(state => state.alert)
  const dispatch = useDispatch()

  const hideAlert = () => dispatch(setAlert({ type: 'hidden' }));

  return (
    <span className={`alert alert-${type}`}>
      <p className="alert-text">{text}</p>
      <button onClick={hideAlert} className="alert-btn">Добре</button>
    </span>
  )
}

const useShowAlert = () => {
  const dispatch = useDispatch();

  return (type, text) => {
    dispatch(setAlert({ type, text }));
  };
}

export { useShowAlert }
export default Alert