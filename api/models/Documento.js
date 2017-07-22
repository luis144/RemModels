/**
 * Documento.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	autoCreatedAt:false,
  	autoUpdatedAt:false,

  			
            NombreDocumento: {
              type: 'string',
              unique:true,
              primaryKey:true,
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{
            	model:'participante'
            },
            NombreOrganizacion: {
            	collection:'Organizacion'
            	via:'NombreOrganizacion',
            },
           Comentarios: {
              type: 'string'
            },
            
            fecha:{
            	type:'date',
            	required:true
            },
            Hora:{
            	type:'datetime',
            	required:true

            },
            Descripcion:{
            	type:'text',

            },
            fechaHistoria:{
            	type:'datetime',
            	required:true
            },
            DescripcionHistoria:{
            	type:'text'
            }

};