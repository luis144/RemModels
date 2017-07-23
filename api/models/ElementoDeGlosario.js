module.exports = {

  attributes: {

  			
            NombreElementoDeGlosario: {
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

            Texto:{
              type:'text'

            },
            TipoDeParrafo:{
              type:'string',
              size:50
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
            TipoDeSeccion:{
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