module.exports = {

  attributes: {

  			IdPeticionesDeCambio:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombrePeticionesDeCambio: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            ObjetosAfectadosDirectamente:{

            },
            ObjetosAfectadosIndirectamente:{

            },
            Urgencia:{

            },
            Estado:{

            },
            Importancia:{

            },
            Analisis:{

            },
            Impacto:{

            },
            Fuentes: {
              
            },
            version:{
              
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

