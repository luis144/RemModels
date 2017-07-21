module.exports = {

  attributes: {

  			IdDefecto:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreDefecto: {
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
            TipoDeDefecto:{

            },
            Solucion:{

            },
            Importancia:{

            },
            Urgencia:{

            },
            ObjetosAfectadosIndirectamente:{
            },

            ObjetosAfectadosDirectamente:{
            }, 
              
           Comentarios: {
              type: 'string'
            },
            Estado:{

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

