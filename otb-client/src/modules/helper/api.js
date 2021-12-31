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

export default class API {
    call(location, method = 'GET', body = null, requiresAuth = false, credentials = null) {

        let options = {
            method,
            body,
            headers : {
                'Content-Type': 'application/json; charset=utf-8'
            }
        }

        if (body != null) {
            options.body = JSON.stringify(body);
        }

        if ( requiresAuth ) {
            const auth = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${auth}`;
        }

        return axios(location, options);
    }
}