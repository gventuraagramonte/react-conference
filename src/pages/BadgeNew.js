import React from 'react'

import './styles/BadgeNew.css'
import header from '../images/platziconf_logo.svg' 
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'


class BadgeNew extends React.Component{
    state = {
        loading: false,
        error: null, 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
    } }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        })
    }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true, error:null })

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            //redirigimos al usuario  a la pagina principal
            this.props.history.push('/badges')
        }catch(error){
            this.setState({ loading: false, error: error })
        }

    }

    render(){
        if(this.state.loading){
            return <PageLoading />
        }

        return(
            <React.Fragment>
                <div className="BadgeNew__hero">
                    <img className="Badge__hero-image img-fluid" src={header} alt="Logo" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                twitter={this.state.form.twitter || 'twitter'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://static.platzi.com/media/avatars/avatars/gventura92_cc3b6175-0091-411d-a769-7dc5b2671571.jpg" 
                            />
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <BadgeForm 
                                onChange={this.handleChange} 
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error} 
                            />
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

export default BadgeNew