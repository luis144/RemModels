module.exports = {

  attributes: {

  			IdParticipante:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreParticipante: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            fuentes: {
              model
            },
            Rol:{

            },
            TipoDeParticipante:{

            },
            Telefono:{

            },
            NombreOrganizacion:{

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

