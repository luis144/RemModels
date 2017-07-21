module.exports = {

  attributes: {

  			IdCasoDeUso:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreDeCasoDeUso: {
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
            version:{
              
            },
            TipoDeCasoDeUso:{

            },
            PostCondicion:{

            },
            Importancia:{

            },
            Urgencia:{

            },
            EstadoDeDesarrollo:{

            },
            Destino:{

            },
            Origen:{

            },
           Comentarios: {
              type: 'string'
            },
            EventoDeAcivacion:{

            },
            FechaDeElaboracion:{

            },
            Veces:{

            },
            Unidad:{

            },
            Precodicion:{
              
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

