/**
 * In_out.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
    connection: 'connectMongoD',
    attributes: {
        localizacion: {
            type: 'json' //descripcion:descripcion de donde sube|tipo:
        },
        descripcion: {
            type: 'string',
            required: true
        },
        tipo: {
            type: 'boolean',
            required: true
        }
    }
};