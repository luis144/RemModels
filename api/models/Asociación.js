module.exports = {

  attributes: {

  			IdAsociacion:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreAsociacion: {
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
            TipoDeAsociacion:{

            },
            Origen:{

            },
            Destino:{
              
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

