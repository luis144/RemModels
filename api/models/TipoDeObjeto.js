module.exports = {

  attributes: {

  			
            NombreTipoDeObjeto: {
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
            CLaseTipoDeObjetos: {
            type:'string',
            size:35
            },
            SuperTipo:{
              type:'string',
              size:40 
            },
            Subtipos:{
              type:'string',
              size:40 

            },
            Especializacion:{
              type:'string',
              size:40 
            },
            Destino:{
              type:'string',
              size:40 
            },
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
              type:'datetime'
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

