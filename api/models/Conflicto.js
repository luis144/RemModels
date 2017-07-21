module.exports = {

  attributes: {

  			IdConflicto:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreConflicto: {
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
            Solucion:{

            },
            Importancia:{

            },
            Urgencia:{

            },
            EstadoDeDesarrollo:{

            },
           Comentarios: {
              type: 'string'
            },
            ObjetosAfectadosDirectamente:{

            },
            ObjetosAfectadosIndirectamente:{
              
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

