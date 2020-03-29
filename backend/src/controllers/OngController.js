const connection = require('../database/connection');
const crypto = require('crypto')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        //gerando um id aleatorio de 4 bytes e transformando em string
        const id = crypto.randomBytes(4).toString('HEX');
        // o await faz com que só seja exeutada a proxima função apos terminar o insert no banco de dados.
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });
        return response.json({ id });

    }

}