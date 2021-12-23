import React, { Component } from 'react';
import Cookies from 'js-cookie';
import { credentials } from '../config/credentials';
import ApiHelper from '../helper/api';

export const Context = React.createContext();

export class Provider extends Component {

    constructor() {
        super();
        this.cookie = Cookies.get('usersession');
        this.helper = new ApiHelper();
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
                getSchedule: this.getSchedule,
                // getAbout: this.getAbout,
                // getEvents: this.getEvents,
                // getContacts: this.getContacts
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

    getSchedule = async (filters) => {
        // need filters here for extra functionality
        const body = {};
        body.filters = filters;
        body.business = credentials;
        return await this.helper('/schedule', 'GET', body, false, false)
    };

};

export const Consumer = Context.Consumer;