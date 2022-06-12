const Logger = (() => {
	let instance;
    let fileStream;

	const createInstance = () => {
		instance = {
            open() {
                const stream = openStream();
                fileStream = stream
            },
            write() {
                // write to stream
            },
            close() {
                // close stream
            }
        };
		return instance;
	};

	return {
		getInstance: () => {
			if (!instance) {
				return createInstance();
			}

			return instance;
		},
	};
})();

const instance1 = Logger.getInstance();
const instance2 = Logger.getInstance();

instance1 === instance2;
