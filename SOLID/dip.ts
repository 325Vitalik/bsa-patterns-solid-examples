//#region bad example
class FrontendDeveloper {
    public writeHtmlCode(): void {
        // some method
    }
}

class BackendDeveloper {
    public writeTypeScriptCode(): void {
        // some method
    }
}

class SoftwareProject {
    public frontendDeveloper: FrontendDeveloper;
    public backendDeveloper: BackendDeveloper;

    constructor() {
        this.frontendDeveloper = new FrontendDeveloper();
        this.backendDeveloper = new BackendDeveloper();
    }

    public createProject(): void {
        this.frontendDeveloper.writeHtmlCode();
        this.backendDeveloper.writeTypeScriptCode();
    }
}
//#endregion

//#region better
interface Developer {
    develop(): void;
}

class FrontendDeveloper implements Developer {
    public develop(): void {
        this.writeHtmlCode();
    }

    private writeHtmlCode(): void {
        // some method
    }
}

class BackendDeveloper implements Developer {
    public develop(): void {
        this.writeTypeScriptCode();
    }

    private writeTypeScriptCode(): void {
        // some method
    }
}

class SoftwareProject {
    public developers: Developer[];

    public extendTeam(developer) {
        this.developers.push(developer)
    }

    public createProject(): void {
        this.developers.forEach((developer: Developer) => {
            developer.develop();
        });
    }
}
//#endregion

//#region docs
https://blog.bitsrc.io/solid-principles-in-typescript-153e6923ffdb
//#endregion