module.exports = {

  attributes: {

  			IdPeticionesDeCambio:{
  				type:'integer',
  				unique:true,
  				primaryKey:true

  			},
            NombrePeticionesDeCambio: {
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
            ObjetosAfectadosDirectamente:{
              type:'string',
              size:40
            },
            ObjetosAfectadosIndirectamente:{

            },
            Urgencia:{
              type:'string'
              size:35
            },
            Estado:{
              type:'string',
              size:35
            },
            Importancia:{
              type:'string',
              size:35
            },
            Analisis:{
              type:'text'
            },
            Impacto:{
              type:'string',
              size:35
            },
           
            version:{
               type:'float'
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

