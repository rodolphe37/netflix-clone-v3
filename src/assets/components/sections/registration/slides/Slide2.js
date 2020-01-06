import React from 'react';
import {plan} from "../../../../../Helpers";

class Slide2 extends React.Component{
    sendData = (e) => {
        plan(e)
    };

    checkPlan = e => {
        if(this.props.currentPlan === ''){
            alert('Vous devez sélectionner un plan pour continuer.')
        } else{
            this.props.nextStep();
        }
    }

    render(){
        const basic = 'basic';
        const standard = 'standard';
        const premium = 'premium';

        return (
            <div className='slide2'>
                <p className="steps">Etape <strong>2</strong> Sur <strong>3</strong></p>
                <p className="headline">Choisissez un plan qui vous convient..</p>
                <p className="dl">Rétrograder ou mettre à niveau à tout moment</p>
                <div className="planBoxes">
                    <div className="fillBox"></div>
                    <div className="items">
                        <div className="box box1 basic" onClick={(e) => {this.props.plan(basic); this.sendData(basic)}}>Basic</div>
                        <div className="box box2 standard" onClick={(e) => {this.props.plan(standard); this.sendData(standard)}}>Standard</div>
                        <div className="box box3 premium" onClick={(e) => {this.props.plan(premium); this.sendData(premium)}}>Premium</div>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Prix ​​mensuel après la fin du mois gratuit</p>
                    <div className="items">
                        <p className="basic">€7,14</p>
                        <p className="standard">€9,82</p>
                        <p className="premium">€12,50</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">HD disponible</p>
                    <div className="items">
                        <p className="basic">Non</p>
                        <p className="standard">Oui</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Ultra HD disponible</p>
                    <div className="items">
                        <p className="basic">Non</p>
                        <p className="standard">Non</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Ecrans que vous pouvez regarder en même temps</p>
                    <div className="items">
                        <p className="basic">1</p>
                        <p className="standard">2</p>
                        <p className="premium">4</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Regardez sur votre ordinateur portable, votre téléviseur, votre téléphone et votre tablette</p>
                    <div className="items">
                        <p className="basic">Oui</p>
                        <p className="standard">Oui</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Films et Séries illimités</p>
                    <div className="items">
                        <p className="basic">Oui</p>
                        <p className="standard">Oui</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Annuler à tout moment</p>
                    <div className="items">
                        <p className="basic">Oui</p>
                        <p className="standard">Oui</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <div className="monthly plan-item">
                    <p className="first-item">Premier mois gratuit</p>
                    <div className="items">
                        <p className="basic">Oui</p>
                        <p className="standard">Oui</p>
                        <p className="premium">Oui</p>
                    </div>
                </div>
                <button className="seePlans continue" onClick={this.checkPlan}>CONTINUER</button>
            </div>
        )
    }
}

export default Slide2;