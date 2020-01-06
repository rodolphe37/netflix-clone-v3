import React from 'react';

class Slide3 extends React.Component{
    firstName = React.createRef();
    lastName = React.createRef();
    email = React.createRef();
    password = React.createRef();

    validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    submitForm = (e) =>{
        e.preventDefault();
        let error = [];
        const info = {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            email: this.email.value,
            password: this.password.value,
        };


        if(info.firstName.length < 3){
            error.push('\nLe prénom doit comporter au moins 3 caractères')
        }

        if(info.lastName.length < 3){
            error.push('\nLe nom de famille doit comporter au moins 3 caractères')
        }

        if(!this.validateEmail(info.email)){
            error.push('\nAdresse e-mail invalide')
        }

        if(info.password.length < 6){
            error.push('\nLe mot de passe doit être au moins de 6 caractères')
        }

        if(error.length !== 0)
            alert(error);
        else{
            this.props.account(info);
            this.props.nextStep();
        }

    };
    render(){
        return (
            <div className='slide1 slide3'>
                <p className="steps">Etape <strong>3</strong> Sur <strong>3</strong></p>
                <p className="headline">Inscrivez-vous pour commencer votre mois gratuit</p>
                <p className="dl"><strong>Créez votre compte</strong></p>
                <form onSubmit={this.submitForm}>
                    <input type="text" name="firstName" placeholder="First Name" ref={(input) => this.firstName = input}  required/>
                    <input type="text" name="lastName" placeholder="Last Name" ref={(input) => this.lastName = input}  required/>
                    <input type="email" name="email" placeholder="Email" ref={(input) => this.email = input}  required/>
                    <input type="password" name="password" placeholder="Password" ref={(input) => this.password = input} required/>
                    <button type="submit" className="seePlans continue">CONFIRM</button>
                </form>
            </div>
        )
    }
}

export default Slide3;