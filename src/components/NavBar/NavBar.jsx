
import imagenLogo from './assets/logo-negro-pestaña.png'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
   return (
          <nav className="navbar navbar-expand-lg">
                <div className="container-fluid ">
                <img src={imagenLogo} alt="Logo"  />
                    <a className="navbar-brand" href="#"> Hierba</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <div className="containter text-center">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">EXPERIENCIA</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">SAHUMOS</a></li>
                                    <li><a className="dropdown-item" href="#">VELAS</a></li>
                                    <li><a className="dropdown-item" href="#">BRUMAS</a></li>
                                    <li><a className="dropdown-item" href="#">PIEDRAS</a></li>
                                    <li><a className="dropdown-item" href="#">BLENDS</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                TIENDA
                                </a>
                                <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">SAHUMOS</a></li>
                                <li><a className="dropdown-item" href="#">VELAS</a></li>
                                <li><a className="dropdown-item" href="#">PACKS</a></li>
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