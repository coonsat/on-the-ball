import axios from 'axios';
import { address } from '../config/address';

export default class ApiHelper {
    api(path, method = 'GET', body = null, requiresAuth = false, credentials = false) {
        const url = address + path;

        const options = {
            method,
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        };

        if (body != null) {
            options.body = JSON.stringify(body);
        }

        if (requiresAuth) {
            const encodedCredentials = btoa(`${credentials.emailAddress}:${credentials.password}`);
            options.headers['Authorization'] = `Basic ${encodedCredentials}`;
        }

        return axios(url, options);
    };
}