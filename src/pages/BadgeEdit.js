import React from 'react'

import './styles/BadgeEdit.css'
import header from '../images/platziconf_logo.svg' 
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'
import PageLoading from '../components/PageLoading'
import api from '../api'


class BadgeEdit extends React.Component{
    state = {
        loading: true,
        error: null, 
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
        } 
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null })

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )

            this.setState({ loading: false, form: data })
        }catch(error){
            this.setState({ loading: false, error: error })
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
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
                <div className="BadgeEdit__hero">
                    <img className="BadgeEdit__hero-image img-fluid" src={header} alt="Logo" />
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
                            <h1>Edit Attendant</h1>
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

export default BadgeEdit