import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

export default class AuthService {
    constructor(clientId, domain) {
        // configure Auth0
        this.lock = new Auth0Lock(clientId, domain, {
            auth: {
                redirectUrl: 'http://localhost:8080/login',
                responseType: 'token',
            },
        });

        // add callback for lock `authenticated` event
        this.lock.on('authenticated', this._doAuthentication.bind(this));

        // bind login function to keep this context
        this.login = this.login.bind(this);
    }

    _doAuthentication(authResult) {
        // save the user token
        this.setToken(authResult.accessToken);

        // navigate to the home route
        browserHistory.replace('/home');
    }

    login() {
        // call the show method to display the widget.
        this.lock.show();
    }

    loggedIn() {
        // check if there is a saved token and it's still valid
        return !!this.getToken();
    }

    // saves user token to local storage
    setToken = accessToken => localStorage.setItem('accessToken', accessToken);

    // retrieves the user token from local storage
    getToken = () => localStorage.getItem('accessToken');

    // clear user token and profile data from local storage
    logout = () => localStorage.removeItem('accessToken');
}
