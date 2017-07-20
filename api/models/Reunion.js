module.exports = {

  attributes: {

  			IdReunion:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreReunion: {
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
            Lugar:{

            },
            Asistentes:{

            },
            Resultados:{

            },
            Destino:{

            };
            Origen:{

            },
           Comentarios: {
              type: 'string'
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

