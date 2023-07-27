import {useState} from 'react'
import {FaBars,  FaTimes} from 'react-icons/fa'
import './NavbarStyle.css';
import Logo from '../Logo/Logo'
import logoImg from "./../../assist/img/logo.svg"
import MenuData from './menu';

function Navbar() {
  const [mobile, setMobile]=useState(false);
  function toogle (){
    setMobile(!mobile);
  }
  return (
    <div className='Navbar'>
      <Logo logoImg={logoImg}
        logoTitle="Starter" />
      <ul className={mobile?"nav__menu active":"nav__menu"}>
        {
          MenuData.map((data ) => {
            return (
              <li className='Nmenu_li' key={data.id}><a  href={data.link} className='Nli_a'>{data.title}</a></li>
            )
          })
        }
        <button className="close-btn" onClick={toogle} ><FaTimes/></button>
      </ul>
      <button className="show-btn" onClick={toogle}><FaBars/></button>
    </div>
  )
}

export default Navbar