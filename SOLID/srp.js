class UserSettings {
    constructor(user) {
        this.user = user;
    }

    changeSettings(settings) {
        if(this.verifyCredentials()) {
            // ...
        }
    }

    verifyCredentials() {
        // check creds valid
    }
}

//#region better
class UserAuth {
    constructor(user) {
        this.user = user;
    }

    verifyCredentials() {
        // check creds valid
    }
}
class UserSettings {
    constructor(user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings(settings) {
        if(this.auth.verifyCredentials()) {
            // ...
        }
    }
}
//#endregion 