const express = require('express')
const app = express()
const fetch = require('node-fetch')
const kafka = require('kafka-node')
const bp = require('body-parser')
const config = require('./kafka-config')

const Producer = kafka.Producer
const client = new kafka.KafkaClient()
const producer = new Producer(client)

app.get('/', (req, res) => {

})

const port = 8885
const server = app.listen(port, ()=>{
    console.log(`ran! at ${port} `)
    getTotal(res => sendData(res))
})

const getTotal = async (resolve) => {
    const total = await fetch('https://corona.lmao.ninja/v2/all')
    let totalData = await total.json()
    resolve(totalData)
}

const sendData = (data) =>{
    const payloads = [
        {
            topic: 'total',
            messages: data
        }
    ]
    producer.send(payloads, (err, data) => {
        if(err) { console.error(err) }
        else { console.log(data) }
    })
}





