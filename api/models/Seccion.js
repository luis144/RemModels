module.exports = {

  attributes: {

  			
            NombreSeccion: {
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
            TipoSeccion:{
              type:'string',
              size:40 
            },

            Orden: {
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
              type:'date',
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

