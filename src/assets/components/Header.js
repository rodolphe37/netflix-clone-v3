import React from 'react';
import Logo from '../img/Netflix-logo.png';
import { Link } from 'react-router-dom';

class Header extends React.Component{
    render(){
        return (
          <div className="header">
              <Link to="/netflix-react/">
                  <img src={Logo} alt='Netflix Logo'/>
              </Link>
              <nav>
                  <ul>
                      <li><Link to="/netflix-react/"><strong>Accueil</strong></Link></li>
                      <li><button>Séries</button></li>
                      <li><button>Film</button></li>
                      <li><button>Originaux</button></li>
                      <li><button>Ajouts Récents</button></li>
                      <li><button>Ma Liste</button></li>
                      <li><Link to="/netflix-react/registration">S'enregistrer</Link></li>
                  </ul>
              </nav>

          </div>
        );
    }
}

export default Header;
