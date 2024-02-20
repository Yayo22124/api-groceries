import app from './app.js';
import database from './databases.js';

app.listen(process.env.SERVER_PORT,()=>{
    console.log('Server on port'+process.env.SERVER_PORT);
})