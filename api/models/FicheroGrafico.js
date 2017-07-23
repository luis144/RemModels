module.exports = {

  attributes: {

  			
            NombreGrafico: {
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
            Destino:{
              type:'string',
              size:40
            },
            Origen:{
              type:'string',
              size:40
            },
            FicheroGrafico:{
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

