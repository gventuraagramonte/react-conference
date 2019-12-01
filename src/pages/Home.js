import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Badges.css'

import imagenLogo from '../images/astronautas.svg'
import logo from '../images/conf_logo.svg'

class Home extends React.Component{
    render(){
        return(
            <div className="Badges__hero min-vh-100 my-0">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <img src={logo} alt="Logo" />
                            <br />
                            <br />
                            <h4 className="font-weight-bolder text-white">
                                PRINT YOUR BADGES
                            </h4>
                            <p className="font-weight-bold text-white">
                                The easiest way to manage your conference
                            </p>
                            <Link to="/badges" className="btn btn-primary">
                                Start Now
                            </Link>
                        </div>
                        <div className="col-7">
                            <img src={imagenLogo} alt="Astronautas" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home