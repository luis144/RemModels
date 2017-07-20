module.exports = {

  attributes: {

  			IdRequisitoDeRestriccion:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreRequisitoDeRestriccion: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes: {
              model
            },
            Version:{

            },
            Importancia:{

            },
            Urgencia:{

            }, 
            EstadoDeDesarrollo:{

            },
            Estabilidad:{

            },
            Destino:{

            },
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

