import app from './app';
import databaseConnection from './database.connection';

const PORT:number = Number(process.env.PORT) || 3000;

app.listen(PORT);

databaseConnection.then(() => app.listen(PORT)).catch(console.error);
