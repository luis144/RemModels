module.exports = {

  attributes: {

  			
            NombreUsuario: {
              type: 'string',
              size: 25,
              required: true,
              unique:true,
              primaryKey:true
            },
           Password: {
             model:'participante'
            },
            NumeroDeIntegrantes: {
              type:'integer'
            },
           Rol: {
              type: 'string'
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }

};

