module.exports = {

  attributes: {

  			IdMatriDeRastreabilidad:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreMatrizDeRastreabilidad: {
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
            FilasDeLaMatriz:{

            },
            ColumnasDeLaMatriz:{

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

