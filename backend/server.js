const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const connectdb = require('./config/db');
connectdb()
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.listen(port, () => console.log(`servidor en puerto ${port}`));