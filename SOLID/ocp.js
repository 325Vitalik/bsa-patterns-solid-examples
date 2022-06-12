class AjaxAdapter extends Adapter {
    constructor() {
        super()
        this.name = 'AjaxAdapter'
    }
}

class NodeAdapter extends Adapter {
    constructor() {
        super()
        this.name = 'NodeAdapter'
    }
}

class HttpRequester {
    constructor() {
        this.ajaxAdapter = new AjaxAdapter();
        this.nodeAdapter = new NodeAdapter();
    }

    fetch(url, adapternName) {
        if(this.ajaxAdapter.name === adapternName) {
            // do ajax request
        } else if (this.nodeAdapter.name === adapternName) {
            // do node request
        }
    }
}

//#region better
class AjaxAdapter extends Adapter {
    constructor() {
        super()
        this.name = 'AjaxAdapter'
    }

    request(url) {
        // do request
    }
}

class NodeAdapter extends Adapter {
    constructor() {
        super()
        this.name = 'NodeAdapter'
    }

    request(url) {
        // do request
    }
}

class HttpRequester {
    constructor(adapter) {
        this.adapter = adapter;
    }

    fetch(url) {
        return this.adapter.request(url)
    }
}
//#endregion