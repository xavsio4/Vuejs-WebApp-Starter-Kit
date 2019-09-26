/**
 * AuthService.js
 *   
 * Example of api access using the api.js file
 * Declare here all necessary routes of the 
 * rest api you reach.
*/

import Api from "./api";

export default {
    auth: {
        userLogin(payload) {
            return apiClient.post('/auth/login/', payload)
        },
        userAliveAndActive() {
            return apiClient.post('/auth/check/')
        },
        userLogout() {
            return apiClient.post('/auth/logout/')
        },
        generateResetToken(payload) {
            return apiClient.post('/auth/generate_reset_token/', payload)
        },
        resetPassword(payload) {
            return apiClient.post('/auth/reset_password/', payload)
        }
    }
 };