import React from 'react';
import {Link} from 'react-router-dom';

class Slide4 extends React.Component{
    email = React.createRef();
    password = React.createRef();

    render(){
        const name = this.props.name;
        const plan = this.props.plan;
        return (
            <div className='slide1 slide4'>
                <p className="headline">Toutes nos félicitations, <span className="red">{name}</span>!<br />
                Vous vous êtes inscrit au plan <span className="red">{plan}</span> <br />
                mais ne vous inquiétez pas, nous ne vous facturerons pas jusqu'à la fin de votre essais.
                </p>

                <Link to="/netflix-react/" className="seePlans continue">COMMENCER À NAVIGUER</Link>

            </div>
        )
    }
}

export default Slide4;