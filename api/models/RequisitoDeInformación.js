module.exports = {

  attributes: {

  			IdRequisitoDeInformacion:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreRequisitoDeInformacion: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{

            },
            version:{

            },
            ConceptoRelevante:{

            },
            valor:{

            },
            UnidadDeTiempo:{

            },
            NumeroMaximo:{

            },
            NumeroMedio:{

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

