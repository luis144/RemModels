module.exports = {

  attributes: {

  			IdConflicto:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombreConflicto: {
              type: 'string',
              size: 25,
              required: true,
              unique:true,
              primaryKey:true
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
              type:'string',
              size:40
            },
            ObjetosAfectadosIndirectamente:{
              type:'string',
              size:40
            },

            fecha:{
              type:'date',
              required:true
            },
            Hora:{
              type:'datetime'
            },
            Descripcion:{
              type:'text'
            },
            fechaHistoria:{
              type:'date'
            },
            DescripcionHistoria:{
            	type:'text'
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }

};

