'use client';
import './burger-btn.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '@/store/store';

const SideBarBtn = () => {
  const dispatch = useDispatch()
  const target = () => dispatch(toggleSidebar())
  const {isOpen} = useSelector(state => state.sidebar)

  return (
    <div className="side-bar-btns">
      <button className={`open-side-bar ${isOpen?'hidden':''}`} onClick={target}>
        <div className='open-side-line' />
        <div className='open-side-line' />
        <div className='open-side-line' />
      </button>

      <button className={`close-side-bar ${isOpen?'':'hidden'}`} onClick={target}>
        <div className='close-side-line'/>
        <div className='close-side-line'/>
      </button>
    </div>
  )
}

export default SideBarBtn
