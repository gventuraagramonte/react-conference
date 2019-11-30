import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/badge-header.svg' 
import Navbar from '../components/Navbar'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'


class BadgeNew extends React.Component{
    render(){
        return(
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName="Giorgio"
                                lastName="Ventura"
                                twitter="gventuraAG"
                                jobTitle="Software Developer"
                                avatarUrl="https://static.platzi.com/media/avatars/avatars/gventura92_cc3b6175-0091-411d-a769-7dc5b2671571.jpg" 
                            />
                        </div>

                        <div className="col-6">
                            <BadgeForm />
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew