// const express = require('express')
// const app = express()
const csv = require('csvtojson')
const csvFilePath = './nasdaq.csv'
const fs = require('fs')

const csvToJson = async () => {
    try {
        const jsonArray = await csv().fromFile(csvFilePath)
        let filterJson = jsonArray.map((stock) => {
            if (stock.Name.toLowerCase().includes('common stock')) {
                return { Name: stock.Name, Symbol: stock.Symbol }
            }
        })
        console.log(filterJson)
        fs.writeFileSync('./data.json', JSON.stringify(filterJson))
    } catch (e) {
        console.log(e)
    }
}

csvToJson()

// app.listen(8081, () => {
//     console.log('server up on port 8081')
// })





