module.exports = {

  attributes: {

  			
            NombreTipoDeValor: {
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
            Definicion: {
              type:'text'              
            },
            Fuentes:{
              collection:'Participante',
             via:'NombreParticipante'
            },
           Comentarios: {
              type: 'string'
            },
            Destino:{
              type:'string',
              size:40               
            },
            Origen:{
              type:'string',
              size:40 
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

