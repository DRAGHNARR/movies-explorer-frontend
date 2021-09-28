class Auth {
  constructor({baseUrl}) {
    this.baseUrl = baseUrl;
    this.signupUrl = baseUrl + "/signup"; 
    this.signinUrl = baseUrl + "/signin";
    this.signCheckUrl = baseUrl + "/users/me";
  }

  _checkResponse(response) {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
  }

  signup(email, password, name) {
    return fetch(this.signupUrl, {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({email, password, name})
    })
    .then(this._checkResponse);
  }

  signin(email, password) {
    return fetch(this.signinUrl, {
      method: 'POST',
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({email, password})
    })
    .then(this._checkResponse);
  }

  signCheck(jwt) {
    return fetch(this.signCheckUrl, {
      method: 'GET',
      headers: {"Content-Type": "application/json", "Authorization" : `Bearer ${jwt}`}
    })
    .then(this._checkResponse);
  }

  updateUser(jwt, oldEmail, email, name) {
    return fetch(this.signCheckUrl, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json", "Authorization" : `Bearer ${jwt}`},
      body: JSON.stringify({oldEmail, email, name})
    })
    .then(this._checkResponse);
  }
}

const auth = new Auth({baseUrl: "http://localhost:3001"});

export default auth;
