/**
 * People.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        nombres: {
            type: 'string',
            required: true
        },
        materno: {
            type: 'string',
            required: true
        },
        paterno: {
            type: 'string',
            required: true
        },
        correo: {
            type: 'string',
            unique: true,
            required: true
        },
        password: {
            type: 'string',
            required: true
        },
        fecha_nacimiento: {
            type: 'datetime',
            required: true
        },
        sexo: {
            type: 'boolean',
            required: true
        },
        school: {
            model: 'school'
        },
        profile: {
            collection: 'profile-student',
            via: 'student'
        }
    }
};