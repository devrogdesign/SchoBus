/**
 * Line.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombre: {
            type: 'string',
            required: true
        },
        color: {
            type: 'string',
            required: true
        },
        tarifa: {
            type: 'float',
            required: true
        },
        bus: {
            collection: 'bus',
            via: 'line'
        },
        route: {
            model: 'route',
            unique: true,
            required: true
        }
    }
};