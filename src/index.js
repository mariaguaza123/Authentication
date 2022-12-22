import Server from './service/server.js';
import Config from './config/index.js';
import { initDb } from './db/indexdb.js';


Server.listen(Config.PUERTO, async () => {

    await initDb();
    console.log('Server escuchando en el puerto', Config.PUERTO);
}); 