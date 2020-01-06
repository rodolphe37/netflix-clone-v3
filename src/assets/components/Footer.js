import React from 'react';
import Logo from '../img/Netflix-logo.png';

class Footer extends React.Component{
    render() {
        return (
            <footer>
                <img src={Logo} alt="Logo"/>
                <p>©2020. Tous droits réservés</p>
                <a href="https://github.com/rodolphe37/netflix-clone-v3" target="_blank" rel="noopener noreferrer">Github</a>
            </footer>
        )
    }
}

export default Footer;