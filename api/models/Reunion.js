module.exports = {

  attributes: {

  			
            NombreReunion: {
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
            Fuentes:{
              collection:'Participante',
             via:'NombreParticipante'
            },
            Version: {
              type:'float',
              required:true
            },
            Lugar:{
              type:'string',
              size:35 

            },
            Asistentes:{
             collection:'Participante',
             via:'NombreParticipante'
            },
            Resultados:{
              type:'text'
            },
            Destino:{
              type:'string',
              size:40 
            };
            Origen:{
              type:'string',
              size:40 
            },
           Comentarios: {
              type: 'text'
            },
          
            fecha:{
              type:'date',
              required:true
            },
            Hora:{
              type:'datetime',
              required:true
            },
            Descripcion:{
              type:'text'
            },
            fechaHistoria:{
              type:'text',
              required:true
            },
            DescripcionHistoria:{
            type:'text'      	
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }
};