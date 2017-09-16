/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        ci: {
            type: 'string',
            required: true
        },
        nombres: {
            type: 'string',
            required: true
        },
        apellidos: {
            type: 'string',
            required: true
        },
        fechaNacimiento: {
            type: 'date',
            required: true
        },
        sexo: {
            type: 'string',
            enum: ['Masculino', 'Femenino', 'Otro'],
            required: true
        },
        profile: {
            collection: 'profile-user',
            via: 'user'
        },
        notifications: {
            collection: 'notification',
            via: 'user'
        }
    }
};