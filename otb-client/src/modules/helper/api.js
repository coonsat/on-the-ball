import * as address from '../config/primary';
import axios from 'axios';

/** 
 * Generalise the outgoing call 
 * @param {string} path to api
 * @param {string} method 
 * @param {string} body of the outgoing api
 * @param {boolean} requiresAuth whether authentication is required 
 * @param {string} credentials 
 * @return Returns the response from authentication/normal server  
*/

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