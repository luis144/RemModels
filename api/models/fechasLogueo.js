module.exports = {

  attributes: {

  			
            idFecha: {
              type: 'string',
              size: 25,
              required: true,
              unique:true,
              primaryKey:true
            },
          Usuario:{
            collection:'Usuario',
             via:'NombreUsuario'
          },
          fechaEntrada:{
            type:'date',
            required:true
          },
          fechaSalida:{
            type:'date',
            required:true
          }
          
};