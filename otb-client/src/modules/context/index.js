import React, { Component } from 'react';
import Cookies from 'js-cookie'
import api from '../helper/api';

const Context = React.createContext();

export class Provider extends Component {
    constructor() {
        super();
        this.cookie = Cookies.get('otb-client-authenticate');
        this.state = {
            authenticatedUser: this.cookie ? JSON.parse(this.cookie) : null
        }
        this.api = new api();
    }

    state = {
        authenticatedUser : null
    }

    login = async ( emailAddress, password ) => {};

    render() {
        const authenticatedUser = this.state;
        const value = {
            authenticatedUser,
            api: this.api,
            actions: {
                login: this.login
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