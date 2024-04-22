import * as functions from 'firebase-functions';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';

// Crear una nueva instancia de aplicación Express
const app: Express = express();

// Aplicar middleware CORS para permitir solicitudes de cualquier origen
app.use(cors({ origin: true }));

// Definir un endpoint GET que responde con un mensaje de bienvenida
app.get('/', (req: Request, res: Response): void => {
    res.send('¡Hola desde Firebase Cloud Functions usando TypeScript!');
});

// Exportar la función de Cloud Function llamada `api`
// Esto crea un endpoint accesible públicamente
exports.api = functions.https.onRequest(app);
