import React from 'react';
import Checkmark from '../../../../img/checkmark.png';

class Slide1 extends React.Component{

    render(){
        return (
            <div className='slide1'>
                <img src={Checkmark} alt="checkmark" />
                <p className="steps">Etape <strong>1</strong> Sur <strong>3</strong></p>
                <p className="headline">Choisissez votre plan.</p>
                <p className="dl">Choisissez parmi l'un de nos trois plans,<br />et vous ne serez facturé qu'une fois<br />que votre mois gratuit sera terminé.</p>
                <button className="seePlans" onClick={this.props.nextStep}>VOIR LES PLANS</button>
            </div>
        )
    }
}

export default Slide1;