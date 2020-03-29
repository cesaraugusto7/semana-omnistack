const connection= require('../database/connection')

module.exports = {
    
    async create(request, response) {
        const ong = await connection('ongs').select('name').where('id',request.body.id).first();

        if(!ong){
            return response.status(400).json({erro: 'NO ONG found with this ID'});
        }

        return response.json({ong});


    }

}