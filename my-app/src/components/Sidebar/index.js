import './index.scss'
import {Link} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';

const Sidebar = ()=>{
    return(
    <div className='nav-bar'>
        <Link classname= 'logo' to = '/'>
         <img src={LogoS} alt='logo'/>
         <img src={LogoSubtitle} className='sub-logo' alt='slobodan'/>
        </Link>
     </div>
     )
   
}

export default Sidebar