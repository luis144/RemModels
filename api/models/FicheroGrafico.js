module.exports = {

  attributes: {

  			IdFicheroGrafico:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreGrafico: {
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
            Destino:{

            },
            Origen:{

            },
            FicheroGrafico:{

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

