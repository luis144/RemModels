module.exports = {

  attributes: {

  			IdObjetivo:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreObjetivo: {
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
            Importancia:{

            },
            Urgencia:{

            },
            EstadoDeDesarrollo:{

            },
            Estabilidad:{

            },
           Comentarios: {
              type: 'string'
            },
            Destino:{

            },
            Origen:{
              
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

