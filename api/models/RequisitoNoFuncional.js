module.exports = {

  attributes: {

  			IdRequisitoNoFuncional:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreRequisitoNoFuncional: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{

            },
            Version:{

            },
            Importancia: {
              model
            },
            Urgencia:{

            }, 
            EstadoDeDesarrollo:{

            },Estabilidad:{

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

