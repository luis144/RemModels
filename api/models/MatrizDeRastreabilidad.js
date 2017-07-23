module.exports = {

  attributes: {

  			
            NombreMatrizDeRastreabilidad: {
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
              
            },
            FilasDeLaMatriz:{

            collection:'Documento',
             via:'NombreDocumento'
            
            collection:'Documento',
             via:'NombreDocumento'
            


            },
            ColumnasDeLaMatriz:{

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
            	type:'text',
            },
             Documento: {
            collection:'Documento',
             via:'NombreDocumento'
            }

};

