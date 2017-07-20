module.exports = {

  attributes: {

  			IdUsuario:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreUsuario: {
              type: 'string',
              size 25,
              required: true
            },
           Password: {
             model:'participante'
            },
            NumeroDeIntegrantes: {
              model
            },
           Rol: {
              type: 'string'
            }

};

