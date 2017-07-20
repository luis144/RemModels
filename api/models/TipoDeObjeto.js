module.exports = {

  attributes: {

  			IdTipoDeObjeto:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreTipoDeObjeto: {
              type: 'string',
              size 25,
              required: true
            },
           Autores: {
             model:'participante'
            },
            Fuentes:{

            },
            CLaseTipoDeObjetos: {
              model
            },
            SuperTipo:{

            },
            Subtipos:{

            },
            Especializacion:{

            },
            Destino:{

            },
            Origen:{

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

