module.exports = {

  attributes: {

  			
            NombreParticipante: {
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
            fuentes: {
               collection:'Participante',
             via:'NombreParticipante'
            },
            Rol:{
              type:'string',
              size:30

            },
            TipoDeParticipante:{
              type:'string',
              size:30
            },
            Telefono:{
              type:'string',
              size:30

            },
            NombreOrganizacion:{
              collection:'Organizacion',
              via:'NombreOrganizacion'

            },
           Comentarios: {
              type: 'string'
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