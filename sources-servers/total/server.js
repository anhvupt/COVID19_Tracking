const express = require('express')
const app = express()
const fetch = require('node-fetch')
const kafka = require('kafka-node')
const bp = require('body-parser')
const config = require('./kafka-config')

app.get('/', (req, res) => {

})

const port = 8885
const server = app.listen(port, ()=>{
    console.log(`ran! at ${port} `)
    getTotal()
})

const getTotal = async () => {
    const total = await fetch('https://corona.lmao.ninja/v2/all')
    let totalData = await total.json()
    console.log(totalData)
}

try{
    const Producer = kafka.Producer
    const client = new kafka.Client(config.kafka_server)
    const producer = new Producer(client)
    const kafka_topic = 'total'
    console.log(kafka_topic)
    let payLoads = [
        {
            topic : kafka_topic,
            
        }
    ]
}



