module.exports = {

  attributes: {

  			IdSeccion:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreSeccion: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{

            },
            TipoSeccion:{

            },

            Orden: {
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

