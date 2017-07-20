/**
 * Documento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

  			IdDocumento:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreDocumento: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            NombreOrganizacion: {
              model
            },
           Comentarios: {
              type: 'string'
            },
            objetivo:{

            },
            fecha:{

            },
            Hora:{

            },
            Descripcion:{

            },
            fechaHistoria:{

            },
            DescripcionHistoria:{
            	
            }

};

