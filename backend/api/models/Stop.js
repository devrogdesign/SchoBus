/**
 * Stop.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        /*lines: {
            collection: 'line',
            via: 'stop'
        },*/
        hora: {
            type: 'string',
            required: true
        },
        lat: {
            type: 'float',
            required: true
        },
        lng: {
            type: 'float',
            required: true
        },
        route: {
            model: 'route'
        }
    }
};