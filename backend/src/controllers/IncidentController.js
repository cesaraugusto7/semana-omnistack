const connection = require('../database/connection');

module.exports = {

    //lista todos os incidentes
    async index(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count();
//select trazendo apenas 5 registros por pagina , trazendo as informações das ongs que inseriram cada cas
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            //limitando o select para cinco;
            .limit(5)
            //logica que faz ele trazer os proximos 5 da proxima pagina a partir do id  da anterior.
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf',
            ]);

        response.header('X-Total-Cout', count['count(*)']);

        return response.json(incidents);



    },

    async create(request, response) {

        const { title, description, value } = request.body;
        //pega o id da ong por meio do cabeçalho da requizição.
        const ong_id = request.headers.authorization;
        //da um insert trazendo como resultado um array ond a primeira posição é o id gerado no insert
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({ id });
    },

    async delete(request, response) {
        return response.json(await connection('incidents').where('id', request.params.id).del());

    }




}