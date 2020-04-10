require("dotenv").config();
const express = require("express");
const massive = require("massive");
const Controller = require("./controller")

const { SERVER_PORT, CONNECTION_STRING } = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
    })
      .then(dbInstance => {
        app.set("db", dbInstance)
      })
      .catch(err => console.log(err))

const app = express()

app.use(express.json())

app.get('api/inventory', Controller.getInventory)

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
})

