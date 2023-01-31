require("dotenv").config();
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const cwd = process.cwd();

const PORT = process.env.PORT;
const app = express();

