module.exports = {

  attributes: {

  			
            NombreDeCasoDeUso: {
              type: 'string',
              size:25,
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
            TipoDeCasoDeUso:{
              type:'string',
              size:'40'
              },
            PostCondicion:{
              type:'text'
            },
            Importancia:{
              type:'string',
              size:30
            },
            Urgencia:{
              type:'string',
              size:30
            },
            EstadoDeDesarrollo:{
              type:'string',
              size:30
            },
            Destino:{
              type:'string',
              size:30
            },
            Origen:{
              type:'string',
              size:30
            },
           Comentarios: {
              type: 'text'
            },
            EventoDeAcivacion:{
              type:'text'

            },
            FechaDeElaboracion:{

            },
            Veces:{
              type:'integer'
            },
            Unidad:{
              type:'string'
            },
            Precodicion:{
              type:'text'
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
            type:'date'
            required:true          	
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }

};