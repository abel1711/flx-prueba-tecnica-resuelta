import './navbar.css';
import LogoFlexxus from '../../assets/logo-flexxus-header.png';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={LogoFlexxus} alt="logo-flexxus" />
    </nav>
  )
}
