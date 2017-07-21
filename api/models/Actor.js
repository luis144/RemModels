module.exports = {

  attributes: {

  			IdActor:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreActor: {
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
            Origen:{

            },
            Destino:{
              
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

