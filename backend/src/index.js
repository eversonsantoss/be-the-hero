const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333); 

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação no beck-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no beck-end
  * DELETE: Deletar uma informação no beck-end
  */

  /**
   * Tipos de parâmetros:
   * 
   * Query Params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos 
   * Request Bory: Corpo da requisição, utilizado para criar ou alterar recursos 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table(users).select('*').where()
     */

    
