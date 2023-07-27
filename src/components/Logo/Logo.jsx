
import './LogoStyle.css';
function Logo(props) {
  return (
    <div className="logo">
    <img src={props.logoImg} alt="" className="logoIMG" />
        <p className='logoTitle'>{props.logoTitle}</p>
    </div>
  )
}

export default Logo