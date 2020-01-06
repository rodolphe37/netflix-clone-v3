import React from 'react';
import { Link } from 'react-router-dom'
class NotFound extends React.Component{
    render(){
        return(
            <div className="notFound">
                404: Page Not Found
                <Link to="/netflix-react">Retourner à l'Accueil</Link>
            </div>
        )
    }
}

export default NotFound