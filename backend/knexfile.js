// Update with your config settings.

module.exports = {
/**?
 * Configuraçẽos do do banco Utilizado para desenvolvimento
 */
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/db.sqlite'
    },
    migrations:{ 
      directory:'./src/database/migrations'
    },
    useNullAsDefault: true
  },
/**?
 * Configuraçẽos do do banco Utilizado para desenvolvimento em grupo time de desenvolvimento
 */
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
/**?
 * Configuraçẽos do do banco Utilizado para para implementação da aplicação
 */

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
