import express from "express";
import db from "./config/database.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express ();

try {
    await db.authenticate();
    console.log ('BDD connectée');
} catch (error) {
    console.log ('Pb connexion BDD', error);
}

app.use (cors());
app.use (express.json());
app.use ('/products', productRoutes);

app.listen (5000, () => console.log ('serveur connecté au port 5000'));