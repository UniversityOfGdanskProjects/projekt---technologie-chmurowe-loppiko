const { MongoClient } = require("mongodb");
const express = require('express');
const config = require('./config.js');
const cors = require('cors');


const client = new MongoClient(config["client-url"]);
const app = express();

app.use(cors());

const myDatabase = {};


async function mongoConnect() {
    await client.connect();

    const database = client.db(config["database"]);
    myDatabase["footerData"] = database.collection("footerData");
    myDatabase["headerData"] = database.collection("headerData");
    myDatabase["mainSiteData"] = database.collection("mainSiteData");
    myDatabase["subjectListData"] = database.collection("subjectListData");
}


function deleteIdFromResponse(response) {
    const { _id, ...rest } = response;
    return rest;
}


async function databaseClose() {
    await client.close();
}


app.get("/footer", async (req, res) => {
    const response = await myDatabase["footerData"].find().toArray();
    res.json(deleteIdFromResponse(response[0]));
});


app.get("/header", async (req, res) => {
    const response = await myDatabase["headerData"].find().toArray();
    res.json(deleteIdFromResponse(response[0]));
});


app.get("/mainSite", async (req, res) => {
    const response = await myDatabase["mainSiteData"].find().toArray();
    res.json(deleteIdFromResponse(response[0]));
});


app.get("/subjects", async (req, res) => {
    const response = await myDatabase["subjectListData"].find().toArray();
    res.json(deleteIdFromResponse(response[0]));
});


app.get('/', (req, res) => {
    res.json("Hello in my world!");
})


app.listen(config["port"], () => {
    console.log(`Current port: ${config["port"]}`)
    mongoConnect();
});
