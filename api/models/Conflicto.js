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
             collection:'Participante',
             via:'NombreParticipante'
            },
            Fuentes: {
              collection:'Participante',
             via:'NombreParticipante'
            },
            version:{
              type:'float',
              required:true              
            },
            Solucion:{
              type:'text',

            },
            Importancia:{
              type:'text',
              required:true

            },
            Urgencia:{
              type:'text',
              required:true

            },
            EstadoDeDesarrollo:{
              type:'text',
              required
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

