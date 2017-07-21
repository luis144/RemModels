module.exports = {

  attributes: {

  			IdOperacionDelSistema:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreOperacionDelSistema: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{

            },
            Version: {
              model
            },
            TipoDeResultado:{

            },
            Destino:{

            },
            Origen:{
              
            },
           Comentarios: {
              type: 'text'
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

