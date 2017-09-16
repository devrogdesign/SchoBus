/**
 * Notification.js
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
        descripcion: {
            type: 'string',
            required: true
        },
        tipo: {
            type: 'string',
            required: true
        },
        user: {
            model: 'user',
            via: 'notifications'
        }
    }
};