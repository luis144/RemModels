module.exports = {

  attributes: {

  			IdTipoDeValor:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreTipoDeValor: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Definicion: {
              model
            },
            Fuentes:{

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

