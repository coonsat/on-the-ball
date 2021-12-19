import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { Address } from '../helper/api';

const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.cookie = Cookies.get('usersession');
    }

    state = {
        user: null,
        trolley: null
    }

    render() {
        const { user, trolley } = this.state;

        const value = {
            user,
            trolley,
            actions: {
                signIn: this.signIn,
                signOut: this.signOut,
                getSchedule: this.getSchedule
            }
        };

        return (
            <Context.Provider value={value}>
                {this.props.children}
            </Context.Provider>
        );
    };

    signIn = async () => {};

    signOut = async () => {};

    getSchedule = async () => {};

};

export const Consumer = Context.Consumer;