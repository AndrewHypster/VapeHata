import './header.css'
import { A } from '../link/link'
import SideBarBtn, { CloseSideBar, OpenSideBar } from '../burger-btn/burger-btn'

const Header = () => {
    return (
        <header className="header">
          <h2 className="header-logo">VapeHata</h2>

          <form className='header-form'>
            <input type="text" className='header-search' placeholder='Пошук...'/>
            <button type='button' className='header-search-btn'>
               <img src="./icons/search.svg" alt="нажміть для пошуку" /> 
            </button>
          </form>

          <nav className="header-nav">
            <A href='./new' text='Новинки' />
            <A href='./shop' text='Магазин' />
            <A href='./about' text='Про нас' />
          </nav>

          <SideBarBtn />
        </header>
    )
}

export default Header
