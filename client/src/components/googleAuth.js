import React, { Component } from 'react'

export default class GoogleAuth extends Component {

    state = {
        isSignedIn: null
    }

    // Intialize the google auth api through browser window
    componentDidMount(){
        window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId: '312073798902-64c0st75esmrqug64rdr2169n6qier06.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            })
        })
    }

    render() {
        return (
            <div>
                Google Auth
            </div>
        )
    }
}
