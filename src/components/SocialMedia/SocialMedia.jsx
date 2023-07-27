import './SocialMediaStyle.css';
import {BiLogoFacebookSquare, BiLogoLinkedinSquare , BiLogoInstagramAlt, BiLogoYoutube ,BiLogoGithub,BiLogoTwitter} from 'react-icons/bi'
function SocialMedia() {
  return (
    <div className='SocialMedia'>
        <a href="#" className='icon ficon'><BiLogoFacebookSquare /></a>
        <a href="#" className='icon Iicon'><BiLogoInstagramAlt /></a>
        <a href="#" className='icon Licon'><BiLogoLinkedinSquare /></a>
        <a href="#" className='icon Yicon'><BiLogoYoutube /></a>
        <a href="#" className='icon Gicon'><BiLogoGithub /></a>
        <a href="#" className='icon Ticon'><BiLogoTwitter /></a>
    </div>
  )
}

export default SocialMedia