module.exports = {

  attributes: {

  			
            NombreRequisitoDeRestriccion: {
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
            Version:{
              type:'float'
              required:true
            },
            Importancia:{
              type:'string',
              size:40     
            },
            Urgencia:{
              type:'string',
              size:40     
            }, 
            EstadoDeDesarrollo:{
              type:'string',
              size:40     
            },
            Estabilidad:{
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
              type:'date'
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
              required:'true'
            },
            DescripcionHistoria:{
            type:'text'                          	
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }

};

