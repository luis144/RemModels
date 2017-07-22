module.exports = {

  attributes: {

  			
            NombreAsociacion: {
              type: 'string',
              size: 25,
              required: true,
              unique:true,
              primarykey:trues

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
            TipoDeAsociacion:{
              type:'string',
              required:true

            },
            Origen:{
              type:'string',
              required:true
            },
            Destino:{
            type:'string',
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
              type:'datetime',
              required:true
            },
            Descripcion:{
              type:'text'

            },
            fechaHistoria:{
              type:'date'
              required
            },
            DescripcionHistoria:{
            	type:'text'
            }

};

