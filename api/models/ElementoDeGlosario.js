module.exports = {

  attributes: {

  			IdElementoDeGlosario:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreElementoDeGlosario: {
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
            Texto:{

            },
            TipoDeParrafo:{

            },
            Destino:{

            },
            Origen:{

            },
           Comentarios: {
              type: 'string'
            },
            TipoDeSeccion:{

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

