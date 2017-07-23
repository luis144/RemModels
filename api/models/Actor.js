module.exports = {

  attributes: {

  			
            NombreActor: {
              type: 'string',
              size: 25,
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
              type:'float'
              
            },
            Origen:{
              type:'string',
              required:true
            },
            Destino:{
              type:'string',
              required:true              
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

