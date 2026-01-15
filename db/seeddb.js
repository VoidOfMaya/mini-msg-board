#! /usr/bin/env node
require('dotenv').config();
const { Client } = require('pg');

const SQL= `
 CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 ),
  created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  text TEXT
);
INSERT INTO messages (username,text ) VALUES ('kevin','ayy i just got a new bike :)' );
INSERT INTO messages (username,text ) VALUES ('Amando','Hi there!' );
INSERT INTO messages (username,text ) VALUES ('Charles','Hello World!' );
INSERT INTO messages (username,text ) VALUES ('rizzLord69','lisen,to whoever stole my bike, i demand that you return it RIGHT NOW! or YOU will face THE REAPER CUSHIONS!!!' );
 `;

async function main(){
   console.log("seeding...");
   
   const client = new Client({
 
     connectionString: process.env.DATABASE_URL,
   });
   await client.connect();
   await client.query(SQL);
   await client.end();
   console.log("done");
 }
main();
