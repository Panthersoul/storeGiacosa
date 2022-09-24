
import imagenLogo from './assets/logo-negro-pestaña.png';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import styles from './assets/styles.css';

const NavBar = () => {
   return (
          <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                    <Link className='electro' to='/'>
                        <img src={imagenLogo} alt="Logo"  /> ElectroSale
                    </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <div className="containter text-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                      
                            <li className="nav-item">
                                <NavLink className={'nav-link'} to='/' style = {({isActive}) => isActive ? {color: 'black', textDecoration: 'none'} : {textDecoration: 'none'}} >
                                    PRODUCTOS
                                </NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">CATEGORIAS</a>
                                <ul className="dropdown-menu">
                               
                            
                            <NavLink
                                to={'/category/Electrodomesticos'}
                                style={{textDecoration: 'none'}}
                                className="dropdown-item"
                            >Electrodomésticos</NavLink>
                            <NavLink
                                to={'/category/Movilidad'}
                                style={{textDecoration: 'none'}}
                                className="dropdown-item"
                            >Movilidad</NavLink>
                            <NavLink
                                to={'/category/Belleza'}
                                style={{textDecoration: 'none'}}
                                className="dropdown-item"
                            >Belleza</NavLink>
                                </ul>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="#">NOSOTROS</a>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                    <CartWidget items={0} />
                </div>
        </nav>
    );
}

export default NavBar;