module.exports = {

  attributes: {

  			
            NombreDefecto: {
              type: 'string',
              size: 25,
              required: true,
              unique: true,
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
              required:true              
            },
            TipoDeDefecto:{
              type:'string',
              size:30
            },

            Solucion:{
              type:'text'
            },

            Importancia:{
            type:'string',
            size:35
            },
            Urgencia:{
              type:'string',
              size:35
            },
            ObjetosAfectadosIndirectamente:{
            type:'string',
            size:40
            },

            ObjetosAfectadosDirectamente:{
            type:'string',
            size:40
            }, 
              
           Comentarios: {
              type: 'string',
              size:35
            },
            Estado:{
              type:'string'
            },
            fecha:{
              type:'date'
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

