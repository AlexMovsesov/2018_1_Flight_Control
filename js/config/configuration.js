'use strict'

class Configuration {

    constructor(options) {
        Object.assign(this, options);
    }
}

const Config = new Configuration({
    tileWSize: 15,
    tileHSize: 15,
    serverDensity: 2000,
    maxHealth: 3,
    eventChannels: [
        'network_fetch',
        'network_ws',
        'mechanics',
        'rendering',
        'animations',
        'generations',
        'input',
        'user',
    ]
});
export {Config};