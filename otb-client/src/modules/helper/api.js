import * as address from '../config/primary';
import axios from 'axios';

export default class api {
    api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
        const location = address.URL + path;

        const options = {
            method,
            'CONTENT-TYPE': 'application/json; charset=utf-8'
        }

        if (body != null) {
            options.body = JSON.stringify(body);
        }

        if ( requiresAuth ) {
            const credentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${credentials}`;
        }

        return axios(location, options);
    }
}