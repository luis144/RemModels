module.exports = {

  attributes: {

            NombreOrganizacion: {
              type: 'string',
              size: 25,
              required: true
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
            ParticipantesAsociados:{
             collection:'Participante',
             via:'NombreParticipante'
            },
            Direccion:{
              type:'string',
              required:true
            },
            Telefono:{
              type:'string',
              required:true
            },
            email:{
              type:'email',
              required:true
            },
           Comentarios: {
              type: 'string'
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
              type:'text',
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

