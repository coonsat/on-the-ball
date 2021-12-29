import React, { Component } from 'react';
import Cookies from 'js-cookie'
import api from '../helper/api';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        authenticatedUser : Cookies.get('otb-client') ? JSON.parse(Cookies.get('otb-client')) : null
    }

    constructor() {
        super();
        this.cookie = Cookies.get('otb-client-authenticate');
        this.state = {
            authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null
        }
        this.api = new api();
    }

    login = async ( emailAddress, password ) => {};

    logout = () => {
        this.setState({
            authenticatedUser: null
        });
        Cookies.remove('otb-client');
    }

    getBookings = () => {
        return api.api('/bookings', 'GET', null, true, true)
                .then(response => response.data)
                .catch(err => {
                    console.log(err);
                });
    };

    createBooking = booking => {
        api.api('/bookings', 'POST', booking, true, this.authenticatedUser)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        const authenticatedUser = this.state;
        const value = {
            authenticatedUser,
            api: this.api,
            actions: {
                login: this.login,
                logout: this.logout,
                getBookings: this.getBookings,
                createBooking: this.createBooking
            }
        };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        )
    };

};

export const Consumer = Context.Consumer;

export function withContext(Component) {
    return function ContextComponent(props) {
        return (
            <Context.Consumer>
                {context => <Component {...props} context={context} />}
            </Context.Consumer>
        );
    };
};

const contextObjects = {withContext, Context};
export default contextObjects;