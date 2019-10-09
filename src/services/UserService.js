import Api from "./api";
import { TokenService } from './storage.service';

export default {

    handleResponse(response) {
            if (!response.ok) {
                if (response.status === 401) {
                    // auto logout if 401 response returned from api
                    this.logout();
                    location.reload(true);
                }

                if (response.status === 400) {
                    // auto logout if 401 response returned from api
                    this.logout();
                    location.reload(true);
                }
    
                const error = response.status;
                return Promise.reject(error);
            }
            return data;
        
    },

     login(identity, password) {
        const requestOptions = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            xsrfCookieName: 'XSRF-TOKEN',
            xsrfHeaderName: 'X-XSRF-TOKEN',
        };
        let data = JSON.stringify({ identity, password });
    
        return Api().post("/user/login", data ,requestOptions)
        
        
        //const user =  this.handleResponse(response);
        // login successful if there's a jwt token in the response
       // if (user.authorizationToken) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
           // localStorage.setItem('authorizationToken', JSON.stringify(user.authorizationToken));
       // }
    },
    
     logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('access_token');
    },
    
     register(user) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse);
    },
    
     getAll() {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
    
        return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
    },
    
    
     getById(id) {
        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };
    
        return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
    },
    
     update(user) {
        const requestOptions = {
            method: 'PUT',
            headers: { ...authHeader(), 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
    
        return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);
    },
    
    // prefixed function name with underscore because delete is a reserved word in javascript
     _delete(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: authHeader()
        };
    
        return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
    },
    
     
    
  
  };
